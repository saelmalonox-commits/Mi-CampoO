(() => {
'use strict';
const SCHEMA_VERSION='2026.09.3';
const TYPES=new Set(['family','individual','decision','relationship','project','energetic','free']);
const DEPTHS=new Set(['suave','normal','profunda']);
const uniq=a=>[...new Set((a||[]).map(x=>String(x||'').trim()).filter(Boolean))];
const text=(v,max=600)=>String(v??'').trim().slice(0,max);
const idify=s=>text(s,90).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')||'practica';
function question(q){if(typeof q==='string')return {q:text(q,280),type:'text',ph:'Describe lo que notas sin intentar acertar.'};if(!q||typeof q!=='object')return null;const out={q:text(q.q,280)};if(!out.q)return null;if(Array.isArray(q.opts)&&q.opts.length)out.opts=uniq(q.opts).slice(0,8);else {out.type=['piece','intuitive-piece','text'].includes(q.type)?q.type:'text';if(out.type==='text')out.ph=text(q.ph||'Describe lo que notas.',180)}return out}
function normalizePlan(raw={}){
 const type=TYPES.has(raw.type)?raw.type:'free';
 const depth=DEPTHS.has(raw.intensity)?raw.intensity:'normal';
 const reps=uniq(raw.representatives||raw.pieces||[]).slice(0,24);
 if(!reps.some(x=>/^yo\b/i.test(x)))reps.unshift('Yo');
 while(reps.length<2)reps.push(reps.length?'Recurso':'Tema');
 const p=raw.protocol||{};
 const qs=(p.observationQuestions||raw.observationQuestions||[]).map(question).filter(Boolean).slice(0,40);
 const movements=(p.movementExperiments||raw.movementExperiments||[]).map(x=>typeof x==='string'?{label:text(x,180)}:{label:text(x?.label||x?.instruction,180),when:text(x?.when,140)}).filter(x=>x.label).slice(0,16);
 const phrases=uniq(p.phrases||raw.phrases||[]).slice(0,16);
 const closing=(p.closingSteps||raw.closingSteps||[]).map(x=>typeof x==='string'?{title:text(x,180),text:''}:{title:text(x?.title,180),text:text(x?.text,320)}).filter(x=>x.title).slice(0,8);
 const integration=uniq(p.integrationActivities||raw.integrationActivities||[]).slice(0,12);
 return {
   schemaVersion:SCHEMA_VERSION,
   id:text(raw.id,100)||`generated-${idify(raw.title||raw.topic||'constelacion')}-${Date.now().toString(36)}`,
   title:text(raw.title||raw.topic||'Constelación personalizada',120),
   category:text(raw.category||type,60), type, solo:raw.solo!==false,
   intensity:depth, minutes:Math.max(5,Math.min(60,Number(raw.minutes)||15)),
   description:text(raw.description||'Constelación generada dinámicamente a partir del tema del practicante.',500),
   intention:text(raw.intention||`Quiero observar simbólicamente ${text(raw.topic||raw.title||'este tema',220).toLowerCase()} y descubrir qué configuración o siguiente paso me resulta significativo.`,520),
   representatives:reps,
   protocol:{
     openingHint:text(p.openingHint||raw.openingHint||'Llega al cuerpo, mira el espacio y permite que las piezas se elijan sin intentar resolver el tema de antemano.',420),
     observationQuestions:qs.length?qs:defaultQuestions(type),
     movementExperiments:movements.length?movements:defaultMovements(type,reps),
     phrases,
     phraseCategory:text(p.phraseCategory||raw.phraseCategory||defaultPhraseCategory(type),40),
     closingPrompt:text(p.closingPrompt||raw.closingPrompt||'Compara el inicio y el final y conserva únicamente lo que te resulte útil o significativo.',420),
     closingSteps:closing,
     integrationActivities:integration.length?integration:['Escribir una frase','Caminar unos minutos','Dibujar la configuración','Elegir una acción pequeña','Descansar y volver al entorno'],
     branchingRules:Array.isArray(p.branchingRules)?p.branchingRules.slice(0,24):[],
     allowIntuitiveFigures:p.allowIntuitiveFigures!==false,
     allowHypothesisExpansion:p.allowHypothesisExpansion!==false,
     generated:true
   },
   generator:{source:text(raw.generator?.source||raw.source||'local',30),createdAt:raw.generator?.createdAt||new Date().toISOString(),topic:text(raw.generator?.topic||raw.topic||raw.title,500)}
 };
}
function defaultPhraseCategory(type){return ({family:'belonging',relationship:'boundaries',decision:'decisions',project:'resources',individual:'autonomy',energetic:'resources',free:'resources'})[type]||'resources'}
function defaultQuestions(type){
 const map={
  family:['¿Qué figura llama primero tu atención?','¿Qué distancia o orientación dentro de la escena te sorprende?','¿Hay alguna ausencia, rama o figura que tu intuición quiera representar?','¿Qué cambia si observas la escena desde tu propio lugar?'],
  relationship:['¿Qué notas entre tú, la otra persona y el vínculo?','¿Dónde aparece el límite en esta escena?','¿Qué parece acercar y qué parece separar?','¿Qué pequeño cambio te gustaría probar?'],
  decision:['¿Qué opción atrae primero tu atención?','¿Qué cambia en tu cuerpo al mirar cada posibilidad?','¿Qué miedo, deseo o recurso necesita una pieza propia?','¿Desde dónde puedes mirar ambas opciones con más perspectiva?'],
  project:['¿Qué queda entre tú y el objetivo?','¿Qué obstáculo podría estar bloqueando, protegiendo o señalando algo?','¿Dónde está el recurso respecto de ti?','¿Cuál sería un primer paso suficientemente pequeño?'],
  energetic:['¿Qué sensación o presencia simbólica llama primero tu atención?','¿Dónde se siente más intensa o más ligera la escena?','¿Qué interpretación intuitiva te aparece antes de cualquier explicación?','¿Qué recurso, límite o protección quieres representar?'],
  individual:['¿Qué parte interna llama primero tu atención?','¿Qué postura, distancia o energía tendría esa parte?','¿Qué podría intentar proteger, pedir o evitar?','¿Qué aparece desde una posición testigo?'],
  free:['¿Qué pieza llama primero tu atención?','¿Qué relación espacial te resulta más significativa?','¿Tu intuición pide añadir alguna figura, ausencia o recurso?','¿Qué pequeño experimento quieres probar?']
 };
 return (map[type]||map.free).map((q,i)=>i===0?{q,type:'piece'}:{q,type:'text',ph:'Describe lo que notas o escribe “no lo sé”.'});
}
function defaultMovements(type,reps){const a=reps[0]||'Yo',b=reps[1]||'Tema';return [
 {label:`Prueba cambiar ligeramente la distancia entre ${a} y ${b}; después compara cómo se siente.`},
 {label:'Gira una sola pieza unos grados y observa qué cambia antes de hacer otro movimiento.'},
 {label:type==='family'?'Si tu intuición señala una ausencia o rama no representada, añade una figura simbólica y déjala encontrar su lugar.':'Si aparece algo importante que aún no tiene pieza, puedes añadir una figura intuitiva y observar qué cambia.'},
 {label:'Si el cambio empeora la escena, vuelve a la configuración anterior y conserva la información del contraste.'}
]}
function inferType(topic=''){const t=topic.toLowerCase();if(/mam|pap|famil|herman|abu|ancestro|adop|origen/.test(t))return 'family';if(/pareja|relaci|v[ií]nculo|ex\b/.test(t))return 'relationship';if(/decid|opci[oó]n|elegir|camino/.test(t))return 'decision';if(/proyecto|trabajo|dinero|negocio|meta|objetivo/.test(t))return 'project';if(/energ|presencia|bruj|protecci|limpieza|carga/.test(t))return 'energetic';if(/miedo|emoci|parte de m[ií]|yo interno|ansiedad|deseo/.test(t))return 'individual';return 'free'}
function repsFor(topic,type){const base={family:['Yo','Figura o vínculo principal','Mi lugar','Lo que conozco','Lo que desconozco','Límite','Recurso'],relationship:['Yo','Otra persona','El vínculo','Lo que acerca','Lo que distancia','Límite','Necesidad','Recurso'],decision:['Yo','Opción A','Opción B','Miedo','Deseo','Consecuencia posible','Recurso','Testigo'],project:['Yo','Objetivo / proyecto','Obstáculo percibido','Recurso','Primer paso','Tarea futura'],energetic:['Yo','Sensación o energía percibida','Lo que pesa','Lo que expande','Límite','Protección','Recurso'],individual:['Yo actual','Parte que siente','Parte que protege','Parte que quiere avanzar','Necesidad','Testigo','Recurso'],free:['Yo','Tema','Lo que quiero','Lo que me detiene','Lo desconocido','Recurso']}[type]||[];const t=topic.trim();return uniq(t?[...base.slice(0,1),t,...base.slice(1)]:base).slice(0,12)}
function generateLocal(request={}){const topic=text(request.topic||request.text||'Exploración libre',500);const type=TYPES.has(request.type)?request.type:inferType(topic);const reps=uniq([...(request.representatives||[]),...repsFor(topic,type)]).slice(0,16);const intensity=DEPTHS.has(request.intensity)?request.intensity:'normal';return normalizePlan({title:request.title||topic,type,category:type,intensity,minutes:request.minutes||(intensity==='profunda'?25:intensity==='suave'?10:15),topic,description:`Constelación completa creada para explorar “${topic}” sin depender de un catálogo cerrado.`,representatives:reps,protocol:{allowIntuitiveFigures:true,allowHypothesisExpansion:true,branchingRules:[{if:'user_notices_missing_figure',then:'offer_intuitive_figure'},{if:'movement_feels_worse',then:'offer_undo'},{if:'interpretation_does_not_resonate',then:'discard_hypothesis_and_offer_alternative'},{if:'user_wants_more_depth',then:'add_observation_question_or_symbolic_hypothesis'}]},generator:{source:'local',topic}})}
function toExercise(plan){return normalizePlan(plan)}
function clonePlan(plan){const p=normalizePlan(plan);p.id=`custom-${idify(p.title)}-${Date.now().toString(36)}`;p.title=`${p.title} · copia`;p.generator={...p.generator,source:'duplicate',createdAt:new Date().toISOString()};return p}
window.CampoConstellationFactory=Object.freeze({schemaVersion:SCHEMA_VERSION,normalizePlan,generateLocal,toExercise,clonePlan,inferType});
})();
