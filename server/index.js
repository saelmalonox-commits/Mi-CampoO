import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GoogleGenAI } from '@google/genai';
import { facilitatorSystemPrompt, liveSystemPrompt, voiceStyleFor, constellationGeneratorPrompt } from './prompts.js';
import { parseJsonObject, pcm16ToWav, sanitizeConstellationPlan } from './utils.js';

const app=express();
const __dirname=path.dirname(fileURLToPath(import.meta.url));
const clientDir=path.resolve(__dirname,'../client');
app.use(express.json({limit:'1mb'}));
const ai=()=>{if(!process.env.GEMINI_API_KEY)throw new Error('GEMINI_API_KEY no configurada');return new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY})};

app.get('/api/health',(req,res)=>res.json({ok:true,app:'Mi Campo MASTER',gemini:!!process.env.GEMINI_API_KEY}));

app.post('/api/gemini/generate-constellation',async(req,res)=>{try{const request=req.body||{};const prompt=`${constellationGeneratorPrompt()}\n\nSOLICITUD DEL PRACTICANTE (JSON):\n${JSON.stringify({topic:String(request.topic||'').slice(0,4000),type:request.type||null,intensity:request.intensity||'normal',knownRepresentatives:Array.isArray(request.representatives)?request.representatives.slice(0,24):[],context:request.context||null},null,2)}`;const result=await ai().models.generateContent({model:process.env.GEMINI_TEXT_MODEL||'gemini-3.7-flash',contents:prompt,config:{responseMimeType:'application/json'}});const raw=result.text||'';const parsed=parseJsonObject(raw);if(!parsed)throw new Error('Gemini no devolvió JSON válido');const plan=sanitizeConstellationPlan({...parsed,topic:request.topic});res.json({plan})}catch(e){res.status(500).json({error:e.message})}});

app.post('/api/gemini/facilitate',async(req,res)=>{try{const {text='',context=null}=req.body||{};const prompt=`${facilitatorSystemPrompt()}\n\nESTADO ACTUAL (JSON):\n${JSON.stringify(context||{},null,2)}\n\nMENSAJE DEL USUARIO:\n${String(text).slice(0,4000)}\n\nDevuelve SOLO JSON: {"reply":"...","action":{"name":"...","args":{}}|null}`;const result=await ai().models.generateContent({model:process.env.GEMINI_TEXT_MODEL||'gemini-3.7-flash',contents:prompt,config:{responseMimeType:'application/json'}});const raw=result.text||'';const data=parseJsonObject(raw)||{reply:raw||'No pude generar una respuesta.',action:null};res.json(data)}catch(e){res.status(500).json({error:e.message})}});

app.post('/api/gemini/live-token',async(req,res)=>{try{const context=req.body?.context||{};const model=process.env.GEMINI_LIVE_MODEL||'gemini-3.1-flash-live-preview';const expireTime=new Date(Date.now()+30*60*1000).toISOString();const token=await ai().authTokens.create({config:{uses:1,expireTime,liveConnectConstraints:{model,config:{responseModalities:['AUDIO'],inputAudioTranscription:{},outputAudioTranscription:{}}}}});res.json({token:token.name,model,voice:voiceStyleFor(context?.settings?.visualWorld,context?.settings?.theme).voice,systemInstruction:liveSystemPrompt(context)})}catch(e){res.status(500).json({error:e.message})}});

app.post('/api/gemini/tts',async(req,res)=>{try{const text=String(req.body?.text||'').trim().slice(0,4500);if(!text)return res.status(400).json({error:'text requerido'});const exp=req.body?.experience||{};const style=voiceStyleFor(exp.world,exp.mode);const response=await ai().models.generateContent({model:process.env.GEMINI_TTS_MODEL||'gemini-3.1-flash-tts-preview',contents:`${style.instruction}\n\n${text}`,config:{responseModalities:['AUDIO'],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:style.voice}}}}});const b64=response.candidates?.[0]?.content?.parts?.find(p=>p.inlineData?.data)?.inlineData?.data;if(!b64)throw new Error('Gemini no devolvió audio');const pcm=Buffer.from(b64,'base64');res.type('audio/wav').send(pcm16ToWav(pcm,24000,1))}catch(e){res.status(500).json({error:e.message})}});

app.use(express.static(clientDir,{extensions:['html'],maxAge:0}));
app.use((req,res)=>res.sendFile(path.join(clientDir,'index.html')));
const port=Number(process.env.PORT||3000);app.listen(port,()=>console.log(`Mi Campo MASTER en http://localhost:${port}`));
