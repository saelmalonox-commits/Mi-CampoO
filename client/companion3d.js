(() => {
  'use strict';

  let THREE = null;
  let GLTFLoader = null;
  let cachedModel = null;
  let loading = null;
  let active = null;

  const modelUrl = './assets/character/axoflutter_companion.glb';
  const fallbackUrl = './assets/character/axoflutter_reference.jpg';
  const worldLights={ocean:[0x43dfff,0x66a9ff],forest:[0x78ee9a,0xe5c96d],storm:[0x6aa8ff,0xb05cff]};

  async function ensureThree(){
    if(THREE && GLTFLoader) return true;
    if(loading) return loading;
    loading = Promise.all([
      import('three'),
      import('three/addons/loaders/GLTFLoader.js')
    ]).then(([t,l]) => { THREE=t; GLTFLoader=l.GLTFLoader; return true; })
      .catch(async firstErr => {
        console.warn('Primary Three.js import unavailable; trying fallback CDN:', firstErr);
        try {
          const [t,l] = await Promise.all([
            import('https://esm.sh/three@0.168.0'),
            import('https://esm.sh/three@0.168.0/examples/jsm/loaders/GLTFLoader.js')
          ]);
          THREE=t; GLTFLoader=l.GLTFLoader; return true;
        } catch (err) {
          console.warn('Companion 3D unavailable:', err); return false;
        }
      });
    return loading;
  }

  async function loadModel(){
    if(cachedModel) return cachedModel;
    if(!(await ensureThree())) return null;
    cachedModel = await new Promise((resolve,reject) => {
      new GLTFLoader().load(modelUrl, gltf => resolve(gltf.scene), undefined, reject);
    }).catch(err => { console.warn('Could not load companion GLB:', err); return null; });
    return cachedModel;
  }

  function renderFallback(container,kind='home') {
    if(!container) return;
    container.dataset.companionStatus='fallback';
    container.innerHTML = `<img class="companion-fallback-image${kind==='session'?' companion-fallback-session':''}" src="${fallbackUrl}" alt="" aria-hidden="true"><span class="companion-fallback-shine" aria-hidden="true"></span>`;
  }

  function destroy(){
    if(!active) return;
    cancelAnimationFrame(active.raf);
    active.observer?.disconnect?.();
    active.renderer?.dispose?.();
    if(active.container) renderFallback(active.container,active.kind||'home');
    active = null;
  }

  async function mount(container, kind, settings){
    if(!container || !settings?.companion) return;
    if(active?.container === container) return;
    destroy();
    renderFallback(container,kind);
    const modelSource = await loadModel();
    if(!modelSource || !container.isConnected) return;

    const rect = container.getBoundingClientRect();
    if(rect.width < 8 || rect.height < 8) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:settings.companionQuality==='battery'?'low-power':'high-performance'});
    } catch (err) {
      console.warn('WebGL renderer unavailable; keeping Axoflutter image fallback:', err);
      return;
    }
    const ratio = settings.companionQuality==='battery' ? 1 : settings.companionQuality==='high' ? Math.min(devicePixelRatio,2) : Math.min(devicePixelRatio,1.5);
    renderer.setPixelRatio(ratio);
    renderer.setSize(rect.width,rect.height,false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.setAttribute('aria-hidden','true');
    renderer.domElement.style.width='100%'; renderer.domElement.style.height='100%'; renderer.domElement.style.display='block';
    const fallback = container.querySelector('.companion-fallback-image');
    container.appendChild(renderer.domElement);
    renderer.domElement.classList.add('companion-canvas');
    let didReveal3D=false;
    renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();container.dataset.companionStatus='fallback';renderer.domElement.classList.remove('is-visible');fallback?.classList.remove('is-behind-3d')},{once:true});

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(kind==='home'?34:38, rect.width/rect.height, .05, 100);
    scene.add(new THREE.HemisphereLight(0xbcefff,0x190b2f,kind==='home'?2.8:2.2));
    const key = new THREE.DirectionalLight(0xffffff,2.8); key.position.set(-2.5,-3.5,5); scene.add(key);
    const world=({cosmos:'storm',aurora:'storm',solar:'storm',lunar:'ocean'}[settings.visualWorld]||settings.visualWorld||'ocean');const colors=worldLights[world]||worldLights.ocean;
    const pink = new THREE.PointLight(colors[0],kind==='home'?15:9,7,2); pink.position.set(2.6,1.3,2.8); scene.add(pink);
    const cyan = new THREE.PointLight(colors[1],kind==='home'?13:8,7,2); cyan.position.set(-2.1,-1.6,1.6); scene.add(cyan);

    const model = modelSource.clone(true);
    scene.add(model);
    model.traverse(o=>{ if(o.isMesh){ o.castShadow=false; o.receiveShadow=false; } });

    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
    const largest = Math.max(size.x,size.y,size.z);
    const scale = (kind==='home'?3.25:1.8)/largest;
    model.scale.setScalar(scale);
    model.rotation.x = Math.PI/2 * .04;
    model.rotation.z = kind==='home' ? -.08 : 0;
    camera.position.set(0,-(kind==='home'?5.55:6.8),kind==='home'?1.18:1.1);
    camera.lookAt(0,0,.55);

    let visible = true;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches || settings.animations===false;
    const presence = settings.companionPresence || 'normal';
    const motionStyle=settings.motionStyle||'orbit';
    const amp = presence==='discreet' ? .018 : presence==='present' ? .055 : .035;
    const start=performance.now();
    const state={container,kind,renderer,scene,camera,model,baseScale:scale,raf:0,observer:null,mode:'idle',world};
    active=state;

    if('IntersectionObserver' in window){
      state.observer=new IntersectionObserver(entries=>{visible=!!entries[0]?.isIntersecting},{threshold:.05});
      state.observer.observe(container);
    }

    function tick(now){
      if(active!==state) return;
      state.raf=requestAnimationFrame(tick);
      if(document.hidden || !visible) return;
      const t=(now-start)/1000;
      if(!reduced){
        const mode=state.mode||'idle';
        const speed=mode==='observing'?.45:mode==='listening'?.65:mode==='celebrate'?1.55:1.0;
        const amount=mode==='pause'?amp*.25:mode==='observing'?amp*.38:mode==='celebrate'?amp*1.55:amp;
        const worldSpeed=state.world==='ocean'?.72:state.world==='forest'?.88:state.world==='storm'?1.32:1;const mSpeed=(motionStyle==='pulse'?1.35:motionStyle==='tide'?.72:motionStyle==='breathe'?.55:motionStyle==='drift'?.82:motionStyle==='still'?.12:1)*worldSpeed;
        const mAmount=motionStyle==='still'?.16:motionStyle==='breathe'?.62:motionStyle==='tide'?.8:1;
        model.position.z=Math.sin(t*1.1*speed*mSpeed)*amount*mAmount+(mode==='celebrate'?Math.max(0,Math.sin(t*1.55))*.03:0);
        model.position.x=state.world==='ocean'?Math.sin(t*.28)*amount*.85:state.world==='forest'?Math.sin(t*.42)*amount*.45:state.world==='storm'?Math.sin(t*1.15)*amount*.55:(motionStyle==='drift'?Math.sin(t*.32)*amount*.7:0);
        model.rotation.z=(kind==='home'?-.08:0)+Math.sin(t*.62*speed*mSpeed)*amount*.8*mAmount;
        model.rotation.y=Math.sin(t*.48*speed*mSpeed)*amount*1.6*mAmount+(mode==='guiding'?.05:0);
        const worldPulse=motionStyle==='pulse'?1+Math.sin(t*1.45)*.014:motionStyle==='breathe'?1+Math.sin(t*.42)*.012:1;
        const pulse=(mode==='listening'?1+Math.sin(t*.8)*.008:mode==='celebrate'?1+Math.sin(t*1.8)*.018:1)*worldPulse;
        model.scale.setScalar(state.baseScale*pulse);
        pink.intensity=(kind==='home'?15:9)*(mode==='guiding'?1.18:mode==='celebrate'?1.35:mode==='pause'?.65:1);
        cyan.intensity=(kind==='home'?13:8)*(mode==='listening'?1.18:mode==='celebrate'?1.28:mode==='pause'?.65:1);
      }
      renderer.render(scene,camera);
      if(!didReveal3D){
        didReveal3D=true;
        container.dataset.companionStatus='ready';
        renderer.domElement.classList.add('is-visible');
        if(fallback)fallback.classList.add('is-behind-3d');
      }
    }
    state.raf=requestAnimationFrame(tick);

    const resize=()=>{
      if(active!==state || !container.isConnected) return;
      const r=container.getBoundingClientRect(); if(r.width<8||r.height<8)return;
      renderer.setSize(r.width,r.height,false); camera.aspect=r.width/r.height; camera.updateProjectionMatrix();
    };
    if('ResizeObserver' in window){const ro=new ResizeObserver(resize);ro.observe(container);const old=state.observer;state.observer={disconnect(){old?.disconnect?.();ro.disconnect()}}}
  }

  function sync(route,settings,session){
    if(!settings?.companion){destroy();return}
    const container = route==='home' ? document.getElementById('companion3d-home') : document.getElementById('companion3d-session');
    if(!container){destroy();return}
    const mode=route==='home'?'idle':({opening:'guiding',placement:'guiding',observation:'listening',movement:'observing',phrase:'guiding',closing:'pause',integration:'celebrate'}[session?.stage]||'idle');
    const effective={...settings,visualWorld:(route==='home'?settings.visualWorld:(session?.visualWorld||settings.visualWorld)),motionStyle:(route==='home'?settings.motionStyle:(session?.motionStyle||settings.motionStyle))};
    if(active?.container===container){active.mode=mode;return}
    mount(container,route==='home'?'home':'session',effective).then(()=>{if(active)active.mode=mode});
  }

  window.CampoCompanion3D={sync,destroy};
})();
