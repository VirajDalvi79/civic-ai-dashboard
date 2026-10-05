"use client";
import { useState } from "react";
import { Badge, Card, Shell, WORK_ORDERS, priorityTone } from "../components/civic";

export default function WorkOrdersPage() {
  const [filter, setFilter] = useState("All");
  const rows = WORK_ORDERS.filter(w => filter === "All" || w.status === filter || w.priority === filter);
  return <Shell title="Work orders" subtitle="Municipal repair actions generated from validated Civic AI detections" action={<div className="flex gap-2"><Badge tone="severe">6 overdue</Badge><Badge tone="neutral">41 open</Badge></div>}>
    <div className="space-y-4"><div className="grid gap-3 sm:grid-cols-4">{[["Open","41"],["Overdue","6"],["Avg. repair","3.2d"],["Verified","241"]].map(([a,b])=><Card key={a}><p className="text-xs text-[#5B6872]">{a}</p><p className="mt-1 text-3xl font-extrabold">{b}</p></Card>)}</div><Card title="Repair queue" aside="sample work orders"><div className="mb-4 flex flex-wrap gap-2">{["All","Critical","High","Medium","Sent","Assigned","Reopened","Verified"].map(f=><button key={f} onClick={()=>setFilter(f)} className={`rounded-full px-3 py-1.5 text-xs font-bold ${filter===f?"bg-[#F2B705]":"bg-[#E7EAED]"}`}>{f}</button>)}</div><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-sm"><thead><tr className="border-b border-[#C9D0D6] text-xs uppercase text-[#5B6872]"><th className="py-3">Work order</th><th>Pothole / road</th><th>Priority</th><th>Team</th><th>Status</th><th>Due</th></tr></thead><tbody>{rows.map(w=><tr key={w.id} className="border-b border-[#E7EAED] last:border-0"><td className="py-3 font-bold">{w.id}</td><td><div className="font-semibold">{w.pothole}</div><div className="text-xs text-[#5B6872]">{w.road}</div></td><td><Badge tone={priorityTone(w.priority)}>{w.priority}</Badge></td><td>{w.team}</td><td>{w.status}</td><td className={w.due==="Overdue"?"font-bold text-[#D64535]":""}>{w.due}</td></tr>)}</tbody></table></div></Card></div>
  </Shell>;
}
