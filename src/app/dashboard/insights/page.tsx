import { DashboardShell, SectionCard, StatusPill } from "@/components/honey-ui";

export default function InsightsPage() {
  return (
    <DashboardShell title="AI insights" subtitle="Decision support" active="AI Insights">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="AI insight" eyebrow="Hive analytics">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-600">Hive health</p>
              <p className="text-3xl font-bold text-slate-900">87/100</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <StatusPill status="Moderate risk" tone="warning" />
              <StatusPill status="AI-assisted" tone="info" />
            </div>
            <p className="mt-4 text-sm text-slate-700">Observation: temperature and humidity are above the normal range for HIVE-02. This is an AI-assisted recommendation and not a guaranteed diagnosis.</p>
            <p className="mt-4 text-sm text-slate-700">Recommendation: Inspect HIVE-02 within the next 24 hours and examine ventilation, colony activity, and forage availability.</p>
          </div>
        </SectionCard>

        <SectionCard title="Predictions" eyebrow="Model outputs">
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span>Productivity prediction</span><span className="font-bold text-slate-900">+9%</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span>Risk anomaly</span><span className="font-bold text-slate-900">Moderate</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span>Disease/pest signal</span><span className="font-bold text-slate-900">Low</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span>Recommended action</span><span className="font-bold text-slate-900">Inspect</span></div>
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
