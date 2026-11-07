"use client";
import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { FAQ } from './Content';
type Group={id:string;title:string;questions:[string,string][]};
export default function FAQExplorer({ groups }: {groups:Group[]}) {
 const [query,setQuery]=useState(''); const [topic,setTopic]=useState('all');
 const filtered=groups.filter(g=>topic==='all'||topic===g.id).map(g=>({...g,questions:g.questions.filter(q=>q.join(' ').toLowerCase().includes(query.trim().toLowerCase()))})).filter(g=>g.questions.length);
 const count=filtered.reduce((n,g)=>n+g.questions.length,0);
 return <div className="faq-workspace"><aside className="faq-controls"><label htmlFor="question-search" className="eyebrow">SEARCH THE QUESTIONS</label><div className="question-search"><Search size={18}/><input id="question-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try referrals or reports"/>{query && <button type="button" aria-label="Clear search" onClick={()=>setQuery('')}><X size={16}/></button>}</div><p className="eyebrow mt-8">BROWSE BY TOPIC</p><div className="topic-filters" role="group" aria-label="Question topics">{[{id:'all',title:'All questions'},...groups].map(g=><button key={g.id} type="button" aria-pressed={topic===g.id} onClick={()=>setTopic(g.id)}>{g.title}<span>{g.id==='all'?groups.reduce((n,x)=>n+x.questions.length,0):groups.find(x=>x.id===g.id)?.questions.length}</span></button>)}</div></aside><div className="faq-results"><p className="results-count" role="status" aria-live="polite">{count} {count===1?'answer':'answers'}{query?' matching your search':''}</p>{filtered.length ? filtered.map((g,i)=><section key={g.id} className="faq-result-group"><div className="section-label"><h2>{g.title}</h2><span>0{i+1}</span></div><FAQ items={g.questions}/></section>):<div className="empty-questions"><h2>No matching questions</h2><p>Try a shorter phrase, or browse all topics.</p><button type="button" className="text-link" onClick={()=>{setQuery('');setTopic('all');}}>Show all questions</button></div>}</div></div>;
}
