"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Badge, Card, PINS, Shell, SEV, severityTone, priorityTone } from "../../components/civic";

export default function PotholeDetailPage() {
  const params = useParams();
  const pothole = PINS.find(p => p.id === params.id) || PINS[0];
  return <Shell title={`Pothole ${pothole.id}`} subtitle={`${pothole.road} · individual detection record`} action={<Link href="/potholes" className="rounded border border-[#C9D0D6] bg-white px-3 py-2 text-sm font-semibold">← Back to registry</Link>}>
    <div className="grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
      <div className="space-y-4">
        <Card title="Detection evidence" aside={`${pothole.conf}% model confidence`}><div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-[#59636C] via-[#343D45] to-[#20272D]"><div className="absolute left-[28%] top-[38%] h-[26%] w-[24%] border-4" style={{borderColor:SEV[pothole.sev]}}><span className="absolute -top-7 left-0 rounded bg-[#F2B705] px-2 py-1 text-xs font-bold text-[#1B242C]">YOLO · pothole {pothole.conf}%</span></div><div className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs text-white">{pothole.bus} · forward camera · {pothole.seen}</div></div></Card>
        <Card title="Detection history"><ol className="relative ml-3 border-l border-[#C9D0D6] pl-5 text-sm"><li className="mb-5"><span className="absolute -left-1.5 h-3 w-3 rounded-full bg-[#2E9D6B]"/><b>Latest observation</b><p className="text-[#5B6872]">{pothole.seen} · {pothole.bus} · {pothole.conf}% confidence</p></li><li className="mb-5"><span className="absolute -left-1.5 h-3 w-3 rounded-full bg-[#F2B705]"/><b>Previous bus pass</b><p className="text-[#5B6872]">Observed consistently at this location</p></li><li><span className="absolute -left-1.5 h-3 w-3 rounded-full bg-[#1F2A33]"/><b>Record created</b><p className="text-[#5B6872]">First registered in Civic AI</p></li></ol></Card>
      </div>
      <div className="space-y-4"><Card title="Current assessment"><div className="flex flex-wrap gap-2"><Badge tone={severityTone(pothole.sev)}>{pothole.sev} severity</Badge><Badge tone={priorityTone(pothole.priority)}>{pothole.priority} priority</Badge><Badge tone="neutral">{pothole.status}</Badge></div><div className="mt-5 grid grid-cols-2 gap-4 text-sm"><div><p className="text-xs text-[#5B6872]">Road</p><p className="font-semibold">{pothole.road}</p></div><div><p className="text-xs text-[#5B6872]">Area</p><p className="font-semibold">{pothole.area}</p></div><div><p className="text-xs text-[#5B6872]">Latitude</p><p className="font-semibold">{pothole.lat}</p></div><div><p className="text-xs text-[#5B6872]">Longitude</p><p className="font-semibold">{pothole.lng}</p></div><div><p className="text-xs text-[#5B6872]">Bus</p><p className="font-semibold">{pothole.bus}</p></div><div><p className="text-xs text-[#5B6872]">Observations</p><p className="font-semibold">{pothole.detections}</p></div></div></Card><Card title="Recommended action"><div className="rounded-lg bg-[#FFF4C7] p-4 text-sm"><p className="font-bold">Prioritize municipal inspection</p><p className="mt-1 text-[#5B6872]">This record is ranked {pothole.priority.toLowerCase()} priority from the sample severity/location workflow.</p></div><Link href="/work-orders" className="mt-4 block rounded bg-[#1F2A33] px-4 py-2 text-center text-sm font-bold text-white">View work orders →</Link></Card></div>
    </div>
  </Shell>;
}
