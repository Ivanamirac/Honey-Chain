import { Activity, AlertCircle, Bell, Droplets, Gauge, PackageCheck, ShieldCheck, TrendingUp, TrendingDown } from "lucide-react";
import { hives, batches } from "@/lib/honey-data";
import { DashboardShell, SectionCard, StatCard, StatusPill } from "@/components/honey-ui";

export default function DashboardPage() {
  return (
    <DashboardShell title="Beekeeper dashboard" subtitle="Updated 2 mins ago" active="Overview">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        <StatCard label="Active hives" value={String(hives.length)} delta="+3%" icon={<Activity className="h-5 w-5" />} />
        <StatCard label="Healthy colonies" value="86%" delta="+4%" icon={<ShieldCheck className="h-5 w-5" />} />
        <StatCard label="Honey produced" value="1,240 kg" delta="+12%" icon={<PackageCheck className="h-5 w-5" />} />
        <StatCard label="Verified batches" value="18" delta="+2" icon={<Gauge className="h-5 w-5" />} />
        <StatCard label="Avg. quality" value="91/100" delta="+2" icon={<TrendingUp className="h-5 w-5" />} />
        <StatCard label="Alerts" value="2" delta="-1" icon={<AlertCircle className="h-5 w-5" />} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <SectionCard title="Hive monitoring" eyebrow="Live field conditions">
          <div className="space-y-4">
            {hives.map((hive) => (
              <div key={hive.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{hive.id}</p>
                    <p className="text-sm text-slate-500">{hive.apiary} · {hive.region}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusPill status={`Health ${hive.healthScore}%`} tone={hive.risk === "Low" ? "success" : hive.risk === "Moderate" ? "warning" : "danger"} />
                    <StatusPill status={`Risk ${hive.risk}`} tone={hive.risk === "Low" ? "success" : hive.risk === "Moderate" ? "warning" : "danger"} />
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-xl bg-white p-3"><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Temperature</p><p className="mt-2 text-lg font-bold text-slate-900">{hive.temperature}°C</p></div>
                  <div className="rounded-xl bg-white p-3"><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Humidity</p><p className="mt-2 text-lg font-bold text-slate-900">{hive.humidity}%</p></div>
                  <div className="rounded-xl bg-white p-3"><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Weight</p><p className="mt-2 text-lg font-bold text-slate-900">{hive.weightKg} kg</p></div>
                  <div className="rounded-xl bg-white p-3"><p className="text-xs uppercase tracking-[0.18em] text-slate-500">Activity</p><p className="mt-2 text-lg font-bold text-slate-900">{hive.activity}%</p></div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Notifications" eyebrow="Operations">
          <div className="space-y-3">
            {[
              ["HIVE-02", "Temperature and humidity are above the normal range.", "Moderate", "warning"],
              ["QC-03", "New quality certificate received for batch HC-2026-00125.", "Info", "info"],
              ["Distribution", "Retail handoff scheduled for tomorrow morning.", "Upcoming", "neutral"],
            ].map(([title, text, tag, tone]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900">{title}</p>
                  <StatusPill status={String(tag)} tone={tone as any} />
                </div>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Batch overview" eyebrow="Honey production">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-slate-500">
                <tr>
                  <th className="pb-3 pr-4 font-medium">Batch</th>
                  <th className="pb-3 pr-4 font-medium">Product</th>
                  <th className="pb-3 pr-4 font-medium">Origin</th>
                  <th className="pb-3 pr-4 font-medium">Quality</th>
                  <th className="pb-3 pr-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {batches.map((batch) => (
                  <tr key={batch.id} className="border-t border-slate-200 align-top">
                    <td className="py-3 pr-4 font-semibold text-slate-900">{batch.id}</td>
                    <td className="py-3 pr-4">{batch.productName}</td>
                    <td className="py-3 pr-4">{batch.origin}</td>
                    <td className="py-3 pr-4">{batch.qualityScore}/100</td>
                    <td className="py-3 pr-4"><StatusPill status={batch.verificationStatus} tone={batch.verificationStatus === "Verified" ? "success" : "warning"} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="AI insight" eyebrow="Decision support">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-600">Hive Health</p>
              <p className="text-2xl font-bold text-slate-900">87/100</p>
            </div>
            <p className="mt-3 text-sm font-medium text-amber-800">Risk: Moderate</p>
            <p className="mt-2 text-sm text-slate-600">Observation: Temperature and humidity are above the normal range for HIVE-02. This is an AI-assisted recommendation, not a medical diagnosis.</p>
            <p className="mt-4 text-sm text-slate-700">Recommendation: Inspect HIVE-02 within the next 24 hours and check ventilation and colony activity.</p>
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
