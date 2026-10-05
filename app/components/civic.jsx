"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SIGN = "#F2B705";
export const SEV = { Severe: "#D64535", Moderate: "#E8892B", Minor: "#2E9D6B" };

export const PINS = [
  { id: "P-2041", x: 70, y: 150, sev: "Severe", road: "Mira Bhayandar Rd, Kashimira", conf: 96, seen: "2h ago", bus: "MBMT-104", status: "Work order sent", lat: "19.2891", lng: "72.8672", priority: "Critical", area: "Kashimira", detections: 8 },
  { id: "P-2038", x: 150, y: 110, sev: "Moderate", road: "Mira Bhayandar Rd, Golden Nest", conf: 91, seen: "5h ago", bus: "MBMT-112", status: "Detected", lat: "19.2854", lng: "72.8568", priority: "High", area: "Golden Nest", detections: 4 },
  { id: "P-2032", x: 235, y: 130, sev: "Severe", road: "Chena Naka junction", conf: 94, seen: "1d ago", bus: "MBMT-104", status: "Reopened", lat: "19.2739", lng: "72.8599", priority: "Critical", area: "Chena Naka", detections: 11 },
  { id: "P-2027", x: 300, y: 70, sev: "Minor", road: "Bhayandar Station Rd", conf: 89, seen: "1d ago", bus: "MBMT-107", status: "Repaired", lat: "19.3017", lng: "72.8523", priority: "Medium", area: "Bhayandar", detections: 5 },
  { id: "P-2019", x: 345, y: 160, sev: "Moderate", road: "Mira Rd Station Rd", conf: 90, seen: "2d ago", bus: "MBMT-109", status: "Work order sent", lat: "19.2828", lng: "72.8678", priority: "High", area: "Mira Road", detections: 6 },
  { id: "P-2011", x: 190, y: 40, sev: "Minor", road: "Poonam Sagar link road", conf: 87, seen: "3d ago", bus: "MBMT-112", status: "Verified by bus pass", lat: "19.2958", lng: "72.8488", priority: "Medium", area: "Poonam Sagar", detections: 9 },
];

export const QUEUE0 = [
  { id: "P-2044", road: "Shanti Park, near market", conf: 71, bus: "MBMT-107", at: "20 min ago", box: [38, 52, 30, 22] },
  { id: "P-2043", road: "Mira Bhayandar Rd, Kashimira", conf: 64, bus: "MBMT-104", at: "1 h ago", box: [48, 40, 26, 26] },
  { id: "P-2042", road: "Bhayandar Station Rd", conf: 68, bus: "MBMT-112", at: "2 h ago", box: [22, 58, 34, 20] },
];

export const CORRIDORS = [
  { name: "Mira Bhayandar Rd", score: 54, potholes: 86, repaired: 42, trend: "+8%" },
  { name: "Chena Naka", score: 61, potholes: 61, repaired: 35, trend: "+3%" },
  { name: "Bhayandar Station Rd", score: 72, potholes: 43, repaired: 31, trend: "−2%" },
  { name: "Mira Rd Station Rd", score: 81, potholes: 29, repaired: 25, trend: "−5%" },
  { name: "Poonam Sagar link", score: 88, potholes: 17, repaired: 15, trend: "−7%" },
];

export const WORK_ORDERS = [
  { id: "WO-0812", pothole: "P-2041", road: "Mira Bhayandar Rd, Kashimira", priority: "Critical", team: "Kashimira maintenance", status: "Sent", due: "Today", age: "6 h" },
  { id: "WO-0809", pothole: "P-2019", road: "Mira Rd Station Rd", priority: "High", team: "Mira Road zone", status: "Assigned", due: "Tomorrow", age: "1 d" },
  { id: "WO-0804", pothole: "P-2032", road: "Chena Naka junction", priority: "Critical", team: "Chena Naka maintenance", status: "Reopened", due: "Overdue", age: "4 d" },
  { id: "WO-0798", pothole: "P-2027", road: "Bhayandar Station Rd", priority: "Medium", team: "Bhayandar zone", status: "Verified", due: "Closed", age: "6 d" },
];

export const BUSES = [
  { id: "MBMT-104", status: "Online", route: "Mira Road → Bhayandar", last: "2 min ago", detections: 74, gps: "Locked", camera: "Healthy" },
  { id: "MBMT-107", status: "Online", route: "Bhayandar → Mira Road", last: "4 min ago", detections: 51, gps: "Locked", camera: "Healthy" },
  { id: "MBMT-109", status: "Online", route: "Mira Road Station", last: "7 min ago", detections: 43, gps: "Locked", camera: "Healthy" },
  { id: "MBMT-112", status: "Online", route: "Poonam Sagar loop", last: "11 min ago", detections: 62, gps: "Locked", camera: "Healthy" },
  { id: "MBMT-101", status: "Offline", route: "Kashimira loop", last: "38 min ago", detections: 18, gps: "Last known", camera: "Check uplink" },
  { id: "MBMT-103", status: "Offline", route: "Bhayandar Station", last: "1 h ago", detections: 22, gps: "Last known", camera: "Check uplink" },
  { id: "MBMT-105", status: "Online", route: "Golden Nest", last: "13 min ago", detections: 39, gps: "Locked", camera: "Healthy" },
  { id: "MBMT-110", status: "Online", route: "Chena Naka", last: "9 min ago", detections: 47, gps: "Locked", camera: "Healthy" },
  { id: "MBMT-111", status: "Online", route: "Mira Bhayandar Rd", last: "5 min ago", detections: 58, gps: "Locked", camera: "Healthy" },
];

export const ACTIVITIES = [
  ["Resolved", "P-2011 confirmed fixed on the 3rd bus pass", "3 h ago"],
  ["Reopened", "P-2032 still present after repair on Chena Naka", "5 h ago"],
  ["Work order", "P-2041 sent to the Kashimira maintenance team", "6 h ago"],
];

export const SPARK = [6, 9, 5, 8, 11, 7, 10, 14, 9, 12, 8, 15, 11, 13, 17, 12, 10, 14, 16, 11];

export const scoreColor = (v) => (v < 60 ? SEV.Severe : v < 75 ? SEV.Moderate : SEV.Minor);

export function Card({ title, aside, children, className = "" }) {
  return <section className={`rounded-lg border border-[#C9D0D6] bg-white p-4 ${className}`}>
    {(title || aside) && <div className="mb-3 flex items-baseline justify-between gap-3"><h2 className="text-[15px] font-bold text-[#1B242C]">{title}</h2><span className="text-xs text-[#5B6872]">{aside}</span></div>}
    {children}
  </section>;
}

export function Badge({ children, tone = "neutral" }) {
  const cls = { neutral: "bg-[#E7EAED] text-[#42515C]", severe: "bg-[#FBE7E4] text-[#A52C20]", moderate: "bg-[#FFF0DF] text-[#9A5310]", minor: "bg-[#E4F4EC] text-[#22704B]", dark: "bg-[#1F2A33] text-white", yellow: "bg-[#FFF4C7] text-[#765800]" }[tone] || "bg-[#E7EAED] text-[#42515C]";
  return <span className={`inline-flex rounded-full px-2 py-1 text-[11px] font-bold ${cls}`}>{children}</span>;
}

export function severityTone(sev) { return sev === "Severe" ? "severe" : sev === "Moderate" ? "moderate" : "minor"; }
export function priorityTone(p) { return p === "Critical" ? "severe" : p === "High" ? "moderate" : "minor"; }

export function TopNav() {
  const path = usePathname();
  const links = [
    ["Dashboard", "/"], ["Potholes", "/potholes"], ["Review", "/review"], ["Work Orders", "/work-orders"], ["Roads", "/roads"], ["Verification", "/verification"],
  ];
  return <nav className="mb-5 overflow-x-auto rounded-lg border border-[#C9D0D6] bg-white p-1.5">
    <div className="flex min-w-max items-center gap-1">
      <Link href="/" className="mr-2 rounded-md bg-[#1F2A33] px-3 py-2 text-sm font-extrabold text-white">CIVIC AI</Link>
      {links.map(([label, href]) => {
        const active = href === "/" ? path === "/" : path.startsWith(href);
        return <Link key={href} href={href} className={`rounded-md px-3 py-2 text-sm font-semibold transition ${active ? "bg-[#F2B705] text-[#1B242C]" : "text-[#5B6872] hover:bg-[#E7EAED]"}`}>{label}</Link>;
      })}
    </div>
  </nav>;
}

export function Shell({ title, subtitle, children, action }) {
  return <main className="min-h-screen bg-[#E7EAED] p-4 text-[#1B242C] lg:p-6">
    <TopNav />
    <header className="mb-5 flex flex-wrap items-end justify-between gap-3">
      <div><h1 className="text-2xl font-extrabold tracking-tight">{title}</h1><p className="mt-1 text-sm text-[#5B6872]">{subtitle}</p></div>
      {action}
    </header>
    {children}
  </main>;
}

export function Gauge({ value }) {
  return <svg viewBox="0 0 200 118" className="w-full" role="img" aria-label={`Road health score ${value} out of 100`}>
    <path d="M20 100 A80 80 0 0 1 180 100" pathLength="100" fill="none" stroke="#3B4853" strokeWidth="14" />
    <path d="M20 100 A80 80 0 0 1 180 100" pathLength="100" fill="none" stroke={SIGN} strokeWidth="14" strokeDasharray={`${value} 100`} />
    <text x="100" y="92" textAnchor="middle" fill="#fff" fontSize="46" fontWeight="800">{value}</text>
  </svg>;
}

export function Bars({ data, color = SIGN }) {
  const max = Math.max(...data);
  return <div className="flex h-12 items-end gap-[3px]">{data.map((d, i) => <span key={i} className="w-full rounded-sm" style={{ height: `${(d / max) * 100}%`, background: color }} />)}</div>;
}

export function MapPanel({ selectedId }) {
  const selected = PINS.find((p) => p.id === selectedId) || PINS[0];
  return <div className="rounded-lg bg-[#DDE2E6] p-2">
    <svg viewBox="0 0 400 200" className="w-full rounded bg-[#CBD2D7]">
      <g stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round"><path d="M10 170 L130 110 L250 130 L390 60" /><path d="M190 10 L200 120 L230 190" /><path d="M250 130 L350 170" /></g>
      <g stroke={SIGN} strokeWidth="1.5" strokeDasharray="6 6" fill="none"><path d="M10 170 L130 110 L250 130 L390 60" /></g>
      {PINS.map((p) => <circle key={p.id} cx={p.x} cy={p.y} r={selected.id === p.id ? 13 : 9} fill={SEV[p.sev]} stroke="#fff" strokeWidth="3" />)}
    </svg>
    <div className="mt-2 flex flex-wrap gap-2 text-xs"><Badge tone="severe">Severe</Badge><Badge tone="moderate">Moderate</Badge><Badge tone="minor">Minor</Badge><span className="ml-auto text-[#5B6872]">Illustrative map · PostGIS geometry in production</span></div>
  </div>;
}
