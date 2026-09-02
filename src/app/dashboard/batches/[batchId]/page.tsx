import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getBatchById } from "@/lib/honey-data";
import { DashboardShell, SectionCard, StatusPill, VerificationTimeline } from "@/components/honey-ui";

export default function BatchDetailPage() {
  const batch = getBatchById("HC-2026-00125");

  if (!batch) return null;

  return (
    <DashboardShell title={batch.id} subtitle={batch.productName} active="Batches">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Batch information" eyebrow="Traceability record">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Product name", batch.productName],
              ["Honey variety", batch.variety],
              ["Beekeeper", batch.beekeeper],
              ["Apiary", batch.apiary],
              ["Hive", batch.hiveId],
              ["Origin", batch.origin],
              ["Harvest date", batch.harvestDate],
              ["Quantity", `${batch.quantityKg} kg`],
              ["Quality score", `${batch.qualityScore}/100`],
              ["Verification status", batch.verificationStatus],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                <p className="mt-2 font-semibold text-slate-900">{String(value)}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Operations" eyebrow="Record tools">
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span className="text-slate-600">Quality</span><StatusPill status={batch.qualityStatus} tone="success" /></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span className="text-slate-600">Processing</span><StatusPill status={batch.processingStatus} tone="success" /></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span className="text-slate-600">Packaging</span><StatusPill status={batch.packagingStatus} tone="success" /></div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span className="text-slate-600">Distribution</span><StatusPill status={batch.distributionStatus} tone="success" /></div>
          </div>
          <div className="mt-4 flex gap-2">
            <Link href="/dashboard/qr" className="rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800">Generate QR</Link>
            <Link href="/verify/HC-2026-00125" className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700">Traceability</Link>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard title="Traceability timeline" eyebrow="Journey">
          <VerificationTimeline events={batch.traceEvents} />
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
