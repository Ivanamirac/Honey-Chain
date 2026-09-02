import Link from "next/link";
import { hives } from "@/lib/honey-data";
import { DashboardShell, SectionCard, StatusPill } from "@/components/honey-ui";

export default function HiveManagementPage() {
  return (
    <DashboardShell title="Hive management" subtitle="3 monitored apiaries" active="Hives">
      <div className="grid gap-6 lg:grid-cols-3">
        {hives.map((hive) => (
          <SectionCard key={hive.id} title={hive.id} eyebrow={hive.apiary} action={<StatusPill status={hive.risk} tone={hive.risk === "Low" ? "success" : hive.risk === "Moderate" ? "warning" : "danger"} />}>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between"><span>Health</span><span className="font-bold text-slate-900">{hive.healthScore}%</span></div>
              <div className="flex items-center justify-between"><span>Temperature</span><span className="font-bold text-slate-900">{hive.temperature}°C</span></div>
              <div className="flex items-center justify-between"><span>Humidity</span><span className="font-bold text-slate-900">{hive.humidity}%</span></div>
              <div className="flex items-center justify-between"><span>Weight</span><span className="font-bold text-slate-900">{hive.weightKg} kg</span></div>
              <div className="flex items-center justify-between"><span>Activity</span><span className="font-bold text-slate-900">{hive.activity}%</span></div>
              <div className="flex items-center justify-between"><span>Last updated</span><span className="font-bold text-slate-900">{new Date(hive.lastUpdated).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span></div>
            </div>
            <div className="mt-4">
              <Link href={`/dashboard/hives/${hive.id}`} className="inline-flex rounded-full bg-emerald-700 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
                View details
              </Link>
            </div>
          </SectionCard>
        ))}
      </div>
    </DashboardShell>
  );
}
