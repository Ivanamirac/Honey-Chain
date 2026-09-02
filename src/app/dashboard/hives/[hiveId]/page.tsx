import { Activity, Droplets, Gauge, Thermometer, Weight, Wifi } from "lucide-react";
import { getHiveById } from "@/lib/honey-data";
import { DashboardShell, SectionCard, StatusPill } from "@/components/honey-ui";

export default function HiveDetailsPage({ params }: { params: Promise<{ hiveId: string }> }) {
  const hive = getHiveById("HIVE-02");

  if (!hive) {
    return <div>Hive not found</div>;
  }

  return (
    <DashboardShell title={hive.id} subtitle={`Apiary: ${hive.apiary}`} active="Hives">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Live readings" eyebrow="IoT status">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="flex items-center gap-3"><Thermometer className="h-5 w-5 text-amber-600" /><span className="text-slate-500">Temperature</span></div><p className="mt-3 text-2xl font-bold text-slate-900">{hive.temperature}°C</p></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="flex items-center gap-3"><Droplets className="h-5 w-5 text-sky-600" /><span className="text-slate-500">Humidity</span></div><p className="mt-3 text-2xl font-bold text-slate-900">{hive.humidity}%</p></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="flex items-center gap-3"><Weight className="h-5 w-5 text-emerald-600" /><span className="text-slate-500">Weight</span></div><p className="mt-3 text-2xl font-bold text-slate-900">{hive.weightKg} kg</p></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><div className="flex items-center gap-3"><Activity className="h-5 w-5 text-violet-600" /><span className="text-slate-500">Activity</span></div><p className="mt-3 text-2xl font-bold text-slate-900">{hive.activity}%</p></div>
          </div>
        </SectionCard>

        <SectionCard title="Health summary" eyebrow="AI assessment">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-slate-600">Hive health score</p>
              <p className="text-2xl font-bold text-slate-900">{hive.healthScore}/100</p>
            </div>
            <div className="mt-4 flex items-center justify-between"><span className="text-sm text-slate-600">Risk level</span><StatusPill status={hive.risk} tone={hive.risk === "Low" ? "success" : hive.risk === "Moderate" ? "warning" : "danger"} /></div>
            <p className="mt-4 text-sm text-slate-600">Observation: temperature and humidity exceed the recommended range, suggesting a ventilation and activity review is recommended.</p>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3 text-sm">
            <span className="text-slate-600">Connectivity</span>
            <span className="flex items-center gap-2 font-bold text-slate-900"><Wifi className="h-4 w-4 text-emerald-600" /> {hive.connected ? "Online" : "Offline"}</span>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Sensor chart" eyebrow="Temperature">
          <div className="flex h-32 items-end gap-2 rounded-2xl bg-slate-100 p-4">
            {[35, 42, 30, 38, 46, 40, 50].map((bar, index) => (
              <div key={index} className="flex-1 rounded-t-xl bg-amber-400/80" style={{ height: `${bar}%` }} />
            ))}
          </div>
        </SectionCard>
        <SectionCard title="Sensor chart" eyebrow="Humidity">
          <div className="flex h-32 items-end gap-2 rounded-2xl bg-slate-100 p-4">
            {[28, 32, 40, 38, 55, 46, 58].map((bar, index) => (
              <div key={index} className="flex-1 rounded-t-xl bg-sky-400/80" style={{ height: `${bar}%` }} />
            ))}
          </div>
        </SectionCard>
        <SectionCard title="Sensor chart" eyebrow="Bee activity">
          <div className="flex h-32 items-end gap-2 rounded-2xl bg-slate-100 p-4">
            {[20, 35, 45, 30, 58, 62, 70].map((bar, index) => (
              <div key={index} className="flex-1 rounded-t-xl bg-violet-400/80" style={{ height: `${bar}%` }} />
            ))}
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
