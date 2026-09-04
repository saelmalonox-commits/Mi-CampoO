export function parseJsonObject(text=''){try{return JSON.parse(text)}catch{}const a=text.indexOf('{'),b=text.lastIndexOf('}');if(a>=0&&b>a)try{return JSON.parse(text.slice(a,b+1))}catch{}return null}
export function pcm16ToWav(pcm,sampleRate=24000,channels=1){const dataSize=pcm.length,buf=Buffer.alloc(44+dataSize);buf.write('RIFF',0);buf.writeUInt32LE(36+dataSize,4);buf.write('WAVE',8);buf.write('fmt ',12);buf.writeUInt32LE(16,16);buf.writeUInt16LE(1,20);buf.writeUInt16LE(channels,22);buf.writeUInt32LE(sampleRate,24);buf.writeUInt32LE(sampleRate*channels*2,28);buf.writeUInt16LE(channels*2,32);buf.writeUInt16LE(16,34);buf.write('data',36);buf.writeUInt32LE(dataSize,40);pcm.copy(buf,44);return buf}


export function sanitizeConstellationPlan(raw={}){
 const types=new Set(['family','individual','decision','relationship','project','energetic','free']);
 const clean=(v,n=600)=>String(v??'').trim().slice(0,n);
 const uniq=a=>[...new Set((Array.isArray(a)?a:[]).map(x=>clean(x,120)).filter(Boolean))];
 const type=types.has(raw.type)?raw.type:'free';
 const representatives=uniq(raw.representatives).slice(0,24);
 if(!representatives.some(x=>/^yo\b/i.test(x)))representatives.unshift('Yo');
 while(representatives.length<2)representatives.push(representatives.length?'Recurso':'Tema');
 const p=raw.protocol&&typeof raw.protocol==='object'?raw.protocol:{};
 const qs=(Array.isArray(p.observationQuestions)?p.observationQuestions:[]).slice(0,40).map(x=>typeof x==='string'?{q:clean(x,280),type:'text',ph:'Describe lo que notas.'}:{q:clean(x?.q,280),type:['piece','intuitive-piece','text'].includes(x?.type)?x.type:undefined,ph:clean(x?.ph,180),opts:uniq(x?.opts).slice(0,8)}).filter(x=>x.q).map(x=>x.opts?.length?{q:x.q,opts:x.opts}:{q:x.q,type:x.type||'text',ph:x.ph||'Describe lo que notas.'});
 const moves=(Array.isArray(p.movementExperiments)?p.movementExperiments:[]).slice(0,16).map(x=>typeof x==='string'?{label:clean(x,220)}:{label:clean(x?.label||x?.instruction,220),when:clean(x?.when,160)}).filter(x=>x.label);
 return {id:clean(raw.id,100),title:clean(raw.title||'Constelación generada',120),category:clean(raw.category||type,60),type,intensity:['suave','normal','profunda'].includes(raw.intensity)?raw.intensity:'normal',minutes:Math.max(5,Math.min(60,Number(raw.minutes)||15)),description:clean(raw.description,500),intention:clean(raw.intention,520),representatives,protocol:{openingHint:clean(p.openingHint,420),observationQuestions:qs,movementExperiments:moves,phrases:uniq(p.phrases).slice(0,16),phraseCategory:clean(p.phraseCategory,40),closingPrompt:clean(p.closingPrompt,420),closingSteps:(Array.isArray(p.closingSteps)?p.closingSteps:[]).slice(0,8).map(x=>typeof x==='string'?{title:clean(x,180),text:''}:{title:clean(x?.title,180),text:clean(x?.text,320)}).filter(x=>x.title),integrationActivities:uniq(p.integrationActivities).slice(0,12),branchingRules:(Array.isArray(p.branchingRules)?p.branchingRules:[]).slice(0,24),allowIntuitiveFigures:p.allowIntuitiveFigures!==false,allowHypothesisExpansion:p.allowHypothesisExpansion!==false},generator:{source:'gemini',createdAt:new Date().toISOString(),topic:clean(raw.generator?.topic||raw.topic||raw.title,500)}};
}
