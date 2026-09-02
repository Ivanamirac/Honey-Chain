import { DashboardShell, SectionCard, StatusPill } from "@/components/honey-ui";

export default function SupplyChainPage() {
  const stages = [
    ["BEEKEEPER", "Verified", "02 Sep 2026", "Ananya Beekeepers", "Colony and apiary records logged."],
    ["HIVE", "Verified", "02 Sep 2026", "Hive Monitoring", "Sensor data captured and recorded."],
    ["HARVEST", "Verified", "25 Aug 2026", "Field team", "Raw honey collected in traceable batch."],
    ["QUALITY TEST", "Verified", "26 Aug 2026", "Honey Quality Laboratory", "Purity, moisture and authenticity validated."],
    ["PROCESSING", "Verified", "27 Aug 2026", "Processing Unit", "Filtered and prepared for packaging."],
    ["PACKAGING", "Verified", "27 Aug 2026", "Packaging Team", "Retail-ready sealed units created."],
    ["DISTRIBUTION", "Verified", "28 Aug 2026", "Distribution Partner", "Inventory handoff complete."],
    ["RETAIL", "Verified", "29 Aug 2026", "Retail Partner", "Stocked under consumer-ready SKU."],
    ["CONSUMER", "Current", "02 Sep 2026", "Consumer App", "Authentication scan is in progress."],
  ];

  return (
    <DashboardShell title="Supply-chain traceability" subtitle="Journey overview" active="Supply Chain">
      <SectionCard title="Traceability journey" eyebrow="End-to-end flow">
        <div className="space-y-4">
          {stages.map(([stage, status, timestamp, actor, description], index) => (
            <div key={stage} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex flex-col items-center">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full ${status === "Verified" ? "bg-emerald-600 text-white" : "bg-amber-100 text-amber-700"}`}>
                  {index + 1}
                </div>
                {index !== stages.length - 1 ? <div className="mt-2 h-10 w-px bg-slate-200" /> : null}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-lg font-semibold text-slate-900">{stage}</p>
                  <StatusPill status={status} tone={status === "Verified" ? "success" : "warning"} />
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{actor}</p>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
                <p className="mt-2 text-xs text-slate-500">{timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </DashboardShell>
  );
}
