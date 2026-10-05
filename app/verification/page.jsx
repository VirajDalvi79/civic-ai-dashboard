"use client";
import { useState } from "react";
import { Badge, Card, Shell, SEV } from "../components/civic";

const ITEMS = [
  {id:"P-2011",road:"Poonam Sagar link road",passes:3,result:"Resolved",note:"No defect observed on third bus pass",time:"3 h ago"},
  {id:"P-2032",road:"Chena Naka junction",passes:2,result:"Reopened",note:"Pothole still present after repair",time:"5 h ago"},
  {id:"P-2027",road:"Bhayandar Station Rd",passes:2,result:"Resolved",note:"Surface appears repaired",time:"1 d ago"},
];
export default function VerificationPage(){
  const [items,setItems]=useState(ITEMS);
  const resolve=(id,result)=>setItems(x=>x.map(i=>i.id===id?{...i,result,note:result==="Resolved"?"Operator confirmed the latest bus pass shows a clear road surface":"Marked for municipal reinspection",time:"just now"}:i));
  return <Shell title="Repair verification" subtitle="Use subsequent MBMT bus passes to verify whether repairs actually resolved the defect" action={<Badge tone="minor">Closed-loop monitoring</Badge>}>
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]"><Card title="Verification queue" aside={`${items.length} tracked repairs`}><div className="space-y-3">{items.map(i=><article key={i.id} className="rounded-lg border border-[#C9D0D6] p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="flex items-center gap-2"><h3 className="font-bold">{i.id}</h3><Badge tone={i.result==="Resolved"?"minor":"severe"}>{i.result}</Badge></div><p className="mt-1 text-sm">{i.road}</p></div><div className="text-right text-xs text-[#5B6872]"><p>{i.passes} bus passes</p><p>{i.time}</p></div></div><div className="mt-3 rounded bg-[#E7EAED] p-3 text-sm"><b>Latest observation:</b> {i.note}</div><div className="mt-3 flex gap-2"><button onClick={()=>resolve(i.id,"Resolved")} className="rounded bg-[#2E9D6B] px-3 py-2 text-xs font-bold text-white">Confirm resolved</button><button onClick={()=>resolve(i.id,"Reopened")} className="rounded bg-[#D64535] px-3 py-2 text-xs font-bold text-white">Reopen work</button></div></article>)}</div></Card><Card title="Why verification matters"><div className="space-y-4 text-sm text-[#5B6872]"><div><p className="font-bold text-[#1B242C]">1 · Repair</p><p>Municipal team completes the work order.</p></div><div><p className="font-bold text-[#1B242C]">2 · Revisit</p><p>An MBMT bus naturally passes the same corridor again.</p></div><div><p className="font-bold text-[#1B242C]">3 · Compare</p><p>The new observation is compared with the original defect.</p></div><div><p className="font-bold text-[#1B242C]">4 · Resolve / reopen</p><p>The dashboard records whether the road is actually clear.</p></div></div></Card></div>
  </Shell>;
}
