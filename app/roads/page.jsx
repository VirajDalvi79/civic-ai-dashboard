"use client";

import Link from "next/link";
import { Badge, Card, Gauge, MapPanel, Shell } from "../components/civic";

// Hardcoded data to bypass cross-file import corruption
const CORRIDORS = [
  { name: "Mira Bhayandar Rd", score: 54, potholes: 86, repaired: 42, trend: "+8%" },
  { name: "Chena Naka", score: 61, potholes: 61, repaired: 35, trend: "+3%" },
  { name: "Bhayandar Station Rd", score: 72, potholes: 43, repaired: 31, trend: "−2%" },
  { name: "Mira Rd Station Rd", score: 81, potholes: 29, repaired: 25, trend: "−5%" },
  { name: "Poonam Sagar link", score: 88, potholes: 12, repaired: 18, trend: "−1%" },
];

// Hardcoded function to bypass cross-file import corruption
const scoreColor = (score) => {
  if (score < 60) return "#D64535"; // Severe (Red)
  if (score < 75) return "#E8892B"; // Moderate (Orange)
  return "#2E9D6B"; // Minor (Green)
};

export default function RoadsPage() {
  return (
    <Shell 
      title="Road health & corridors" 
      subtitle="Prioritize maintenance by corridor-level road health" 
      action={<Badge tone="yellow">Overall score · 68 / 100</Badge>}
    >
      <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
        
        {/* Left Sidebar */}
        <aside className="rounded-lg bg-[#1F2A33] p-5 text-white">
          <Gauge value={68} />
          <p className="mt-4 text-center text-sm font-bold">City road health</p>
          <p className="mt-1 text-center text-xs text-[#9AA7B2]">Lower-scoring corridors need attention first.</p>
          <div className="my-5 border-t-2 border-dashed border-[#F2B705]" />
          
          <div className="space-y-4">
            {CORRIDORS.map((c) => (
              <div key={c.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{c.name}</span>
                  <span>{c.score}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded bg-[#3B4853]">
                  <div 
                    className="h-1.5 rounded" 
                    style={{ width: `${c.score}%`, backgroundColor: scoreColor(c.score) }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
        
        {/* Main Content Area */}
        <div className="space-y-4">
          <Card title="Road monitoring map" aside="illustrative PostGIS layer">
            <MapPanel />
          </Card>
          
          <Card title="Corridor performance">
            <div className="grid gap-3 md:grid-cols-2">
              {CORRIDORS.map((c) => (
                <div key={c.name} className="rounded-lg border border-[#C9D0D6] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold">{c.name}</h3>
                      <p className="text-xs text-[#5B6872]">{c.potholes} detections · {c.repaired} repaired</p>
                    </div>
                    <Badge tone={c.score < 60 ? "severe" : c.score < 75 ? "moderate" : "minor"}>
                      {c.score}/100
                    </Badge>
                  </div>
                  <div className="mt-4 flex justify-between text-xs text-[#5B6872]">
                    <span>Trend</span>
                    <span className="font-bold">{c.trend}</span>
                  </div>
                  <Link href="/potholes" className="mt-3 block text-sm font-bold underline decoration-[#F2B705]">
                    Inspect potholes →
                  </Link>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
      </div>
    </Shell>
  );
}