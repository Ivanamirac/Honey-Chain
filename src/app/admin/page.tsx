import { Activity, BarChart3, ClipboardCheck, Factory, ShieldCheck, Users } from "lucide-react";
import { adminMetrics, batches } from "@/lib/honey-data";
import { DashboardShell, SectionCard, StatusPill } from "@/components/honey-ui";

export default function AdminPage() {
  return (
    <DashboardShell title="Admin dashboard" subtitle="System oversight" active="Overview">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{metric.value}</p>
            <p className="mt-2 text-sm text-emerald-700">{metric.change}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Flagged batches" eyebrow="Operational review">
          <div className="space-y-3">
            {batches.map((batch) => (
              <div key={batch.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3">
                <div>
                  <p className="font-semibold text-slate-900">{batch.id}</p>
                  <p className="text-sm text-slate-500">{batch.productName} · {batch.origin}</p>
                </div>
                <StatusPill status={batch.verificationStatus === "Verified" ? "Verified" : "Review"} tone={batch.verificationStatus === "Verified" ? "success" : "warning"} />
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Governance" eyebrow="Roles and verification">
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span>Approved beekeepers</span><span className="font-bold text-slate-900">128</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span>Quality labs</span><span className="font-bold text-slate-900">7</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span>Distribution partners</span><span className="font-bold text-slate-900">14</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span>Active IoT devices</span><span className="font-bold text-slate-900">72</span></div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <SectionCard title="Inventory" eyebrow="Network view">
          <div className="space-y-3">
            <div className="flex items-center gap-3"><Users className="h-5 w-5 text-emerald-600" /><span className="text-sm text-slate-600">148 beekeepers linked</span></div>
            <div className="flex items-center gap-3"><Factory className="h-5 w-5 text-amber-600" /><span className="text-sm text-slate-600">38 apiaries active</span></div>
            <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-sky-600" /><span className="text-sm text-slate-600">92% verified batches</span></div>
          </div>
        </SectionCard>

        <SectionCard title="Quality reports" eyebrow="Lab view">
          <div className="space-y-3">
            <div className="flex items-center justify-between"><span className="text-sm text-slate-600">Passed</span><span className="font-bold text-slate-900">78</span></div>
            <div className="flex items-center justify-between"><span className="text-sm text-slate-600">In review</span><span className="font-bold text-slate-900">12</span></div>
            <div className="flex items-center justify-between"><span className="text-sm text-slate-600">Flagged</span><span className="font-bold text-slate-900">4</span></div>
          </div>
        </SectionCard>

        <SectionCard title="Supply-chain events" eyebrow="Activity">
          <div className="space-y-3">
            <div className="flex items-center gap-3"><Activity className="h-5 w-5 text-violet-600" /><span className="text-sm text-slate-600">24 batch handoffs today</span></div>
            <div className="flex items-center gap-3"><BarChart3 className="h-5 w-5 text-emerald-600" /><span className="text-sm text-slate-600">1.2k kg routed to retail</span></div>
            <div className="flex items-center gap-3"><ClipboardCheck className="h-5 w-5 text-amber-600" /><span className="text-sm text-slate-600">21 audit checks delivered</span></div>
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
