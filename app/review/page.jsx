"use client";
import { useState } from "react";
import { Badge, Card, QUEUE0, Shell } from "../components/civic";

export default function ReviewPage() {
  const [queue, setQueue] = useState(QUEUE0);
  const [history, setHistory] = useState([]);
  const decide = (q, action) => { setQueue(x=>x.filter(i=>i.id!==q.id)); setHistory(x=>[{id:q.id,action,at:"just now"},...x]); };
  return <Shell title="Human review queue" subtitle="Low-confidence detections requiring operator validation" action={<Badge tone="yellow">AI confidence threshold · sample</Badge>}>
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <Card title="Awaiting review" aside={`${queue.length} detections`}><div className="grid gap-4 md:grid-cols-3">{queue.length ? queue.map(q=><article key={q.id} className="overflow-hidden rounded-lg border border-[#C9D0D6]"><div className="relative h-40 bg-gradient-to-br from-[#59636C] to-[#252C32]"><div className="absolute border-2 border-[#F2B705]" style={{left:`${q.box[0]}%`,top:`${q.box[1]}%`,width:`${q.box[2]}%`,height:`${q.box[3]}%`}}><span className="absolute -top-6 left-0 whitespace-nowrap bg-[#F2B705] px-1 text-[11px] font-bold">pothole {q.conf}%</span></div></div><div className="p-3"><p className="font-bold">{q.id}</p><p className="text-sm">{q.road}</p><p className="mt-1 text-xs text-[#5B6872]">{q.bus} · {q.at}</p><div className="mt-3 flex gap-1"><button onClick={()=>decide(q,"Approved")} className="flex-1 rounded bg-[#2E9D6B] py-2 text-xs font-bold text-white">Approve</button><button onClick={()=>decide(q,"Rejected")} className="flex-1 rounded bg-[#D64535] py-2 text-xs font-bold text-white">Reject</button><button onClick={()=>decide(q,"Duplicate")} className="flex-1 rounded border border-[#C9D0D6] py-2 text-xs font-bold">Duplicate</button></div></div></article>) : <p className="py-12 text-center text-sm text-[#5B6872] md:col-span-3">Review queue cleared.</p>}</div></Card>
      <Card title="Review guidance"><ul className="space-y-3 text-sm text-[#5B6872]"><li><b className="text-[#1B242C]">Approve:</b> defect is a valid pothole and should enter the repair workflow.</li><li><b className="text-[#1B242C]">Reject:</b> detection is not a road defect.</li><li><b className="text-[#1B242C]">Duplicate:</b> same defect is already registered.</li></ul><div className="mt-5 border-t border-[#E7EAED] pt-4"><p className="text-xs uppercase tracking-wide text-[#5B6872]">Session activity</p>{history.length===0?<p className="mt-2 text-sm">No decisions yet.</p>:<ul className="mt-2 space-y-2">{history.map((h,i)=><li key={i} className="text-sm"><b>{h.id}</b> · {h.action} <span className="text-[#5B6872]">· {h.at}</span></li>)}</ul>}</div></Card>
    </div>
  </Shell>;
}
