"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Badge, Card, PINS, Shell, severityTone } from "../components/civic";

export default function PotholesPage() {
  const [query, setQuery] = useState("");
  const [sev, setSev] = useState("All");
  const [status, setStatus] = useState("All");
  const rows = useMemo(() => PINS.filter(p => `${p.id} ${p.road} ${p.bus}`.toLowerCase().includes(query.toLowerCase()) && (sev === "All" || p.sev === sev) && (status === "All" || p.status === status)), [query, sev, status]);
  return <Shell title="Pothole registry" subtitle="All detected road defects · filter, inspect, and trace each detection" action={<span className="rounded-full bg-[#1F2A33] px-3 py-1.5 text-sm font-semibold text-white">6 tracked records</span>}>
    <div className="space-y-4">
      <Card><div className="grid gap-3 md:grid-cols-[1fr_180px_210px]"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search ID, road, or bus…" className="rounded border border-[#C9D0D6] px-3 py-2 text-sm outline-none focus:border-[#F2B705]"/><select value={sev} onChange={e=>setSev(e.target.value)} className="rounded border border-[#C9D0D6] px-3 py-2 text-sm"><option>All</option><option>Severe</option><option>Moderate</option><option>Minor</option></select><select value={status} onChange={e=>setStatus(e.target.value)} className="rounded border border-[#C9D0D6] px-3 py-2 text-sm"><option>All</option><option>Detected</option><option>Work order sent</option><option>Repaired</option><option>Reopened</option><option>Verified by bus pass</option></select></div></Card>
      <Card title="Detected potholes" aside={`${rows.length} matching`}><div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-sm"><thead><tr className="border-b border-[#C9D0D6] text-xs uppercase tracking-wide text-[#5B6872]"><th className="py-3">ID</th><th>Road</th><th>Severity</th><th>Confidence</th><th>Bus</th><th>Status</th><th></th></tr></thead><tbody>{rows.map(p=><tr key={p.id} className="border-b border-[#E7EAED] last:border-0"><td className="py-3 font-bold"><Link href={`/potholes/${p.id}`} className="underline decoration-[#F2B705]">{p.id}</Link></td><td>{p.road}</td><td><Badge tone={severityTone(p.sev)}>{p.sev}</Badge></td><td>{p.conf}%</td><td>{p.bus}</td><td>{p.status}</td><td><Link href={`/potholes/${p.id}`} className="font-semibold text-[#765800]">Open →</Link></td></tr>)}</tbody></table></div></Card>
    </div>
  </Shell>;
}
