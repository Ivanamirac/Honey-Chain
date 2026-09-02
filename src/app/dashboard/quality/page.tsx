import { DashboardShell, SectionCard, StatusPill } from "@/components/honey-ui";

export default function QualityPage() {
  return (
    <DashboardShell title="Quality verification" subtitle="Lab review" active="Quality">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Quality status" eyebrow="Lab evidence">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-600">Status</p>
              <StatusPill status="PASSED" tone="success" />
            </div>
            <p className="mt-4 text-3xl font-bold text-slate-900">94/100</p>
            <p className="mt-2 text-sm text-slate-700">Lab verification for HC-2026-00125 confirms purity, moisture and floral authenticity checks passed.</p>
          </div>
        </SectionCard>

        <SectionCard title="Certificate" eyebrow="Report details">
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between"><span>Moisture</span><span className="font-bold text-slate-900">17.2%</span></div>
            <div className="flex items-center justify-between"><span>Purity</span><span className="font-bold text-slate-900">98.4%</span></div>
            <div className="flex items-center justify-between"><span>Lab</span><span className="font-bold text-slate-900">Honey Quality Laboratory</span></div>
            <div className="flex items-center justify-between"><span>Certificate ID</span><span className="font-bold text-slate-900">HC-LAB-2026-00042</span></div>
            <div className="flex items-center justify-between"><span>Verification</span><span className="font-bold text-slate-900">Verified</span></div>
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
