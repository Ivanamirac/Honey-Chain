import Link from "next/link";
import { CheckCircle2, MapPin, ShieldCheck, Sprout, Warehouse } from "lucide-react";
import { getBatchById, getVerificationSummary } from "@/lib/honey-data";
import { PrimaryLink, SectionCard, StatusPill, VerificationTimeline } from "@/components/honey-ui";

export default function BatchVerificationPage({ params }: { params: Promise<{ batchId: string }> }) {
  const batchId = "HC-2026-00125";
  const batch = getBatchById(batchId);

  if (!batch) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Honey Chain</p>
          <h1 className="mt-4 text-3xl font-bold">Batch not found</h1>
          <p className="mt-2 text-sm text-slate-600">The requested batch ID could not be found in the current traceability dataset.</p>
          <Link href="/verify" className="mt-6 inline-flex rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
            Back to verification
          </Link>
        </div>
      </main>
    );
  }

  const verification = getVerificationSummary(batch.id);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Honey Chain verification</p>
            <h1 className="mt-2 text-3xl font-bold">{verification.isValid ? "Authentic product" : "Verification review"}</h1>
          </div>
          <div className="flex items-center gap-3">
            <StatusPill status={verification.status} tone={verification.isValid ? "success" : "warning"} />
            <Link href="/verify" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-emerald-200 hover:text-emerald-700">
              Verify another batch
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionCard title="Certificate and origin" eyebrow="Product details" action={<StatusPill status={verification.status} tone={verification.isValid ? "success" : "warning"} />}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Product name</p>
                <p className="mt-2 text-xl font-bold text-slate-900">{batch.productName}</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Batch ID</p>
                <p className="mt-2 text-xl font-bold text-slate-900">{batch.id}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Honey variety</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{batch.variety}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Origin</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{batch.origin}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Beekeeper</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{batch.beekeeper}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Hive ID</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{batch.hiveId}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Harvest date</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{batch.harvestDate}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Quantity</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{batch.quantityKg} kg</p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Verification status" eyebrow="Result">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7 text-emerald-700" />
                <div>
                  <p className="text-sm text-slate-500">Authenticity status</p>
                  <p className="text-2xl font-bold text-slate-900">{verification.isValid ? "Verified" : "Pending"}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-700">{verification.message}</p>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3">
                <span className="text-slate-600">Quality score</span>
                <span className="font-bold text-slate-900">{batch.qualityScore}/100</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3">
                <span className="text-slate-600">Quality status</span>
                <span className="font-bold text-slate-900">{batch.qualityStatus}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3">
                <span className="text-slate-600">Processing status</span>
                <span className="font-bold text-slate-900">{batch.processingStatus}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3">
                <span className="text-slate-600">Packaging status</span>
                <span className="font-bold text-slate-900">{batch.packagingStatus}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3">
                <span className="text-slate-600">Distribution status</span>
                <span className="font-bold text-slate-900">{batch.distributionStatus}</span>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <SectionCard title="Traceability timeline" eyebrow="Full journey">
            <VerificationTimeline events={batch.traceEvents} />
          </SectionCard>

          <div className="space-y-6">
            <SectionCard title="Ledger proof" eyebrow="Blockchain adapter">
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3">
                  <span className="text-slate-600">Verification status</span>
                  <StatusPill status={verification.status} tone={verification.isValid ? "success" : "warning"} />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-slate-500">Ledger hash</p>
                  <p className="mt-2 break-all font-mono text-xs text-slate-700">{batch.ledgerHash}</p>
                </div>
              </div>
            </SectionCard>

            <SectionCard title="Quality certificate" eyebrow="Lab evidence">
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Score</span>
                  <span className="font-bold text-slate-900">94/100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Moisture</span>
                  <span className="font-bold text-slate-900">17.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Purity</span>
                  <span className="font-bold text-slate-900">98.4%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Lab</span>
                  <span className="font-bold text-slate-900">Honey Quality Laboratory</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Certificate ID</span>
                  <span className="font-bold text-slate-900">HC-LAB-2026-00042</span>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <PrimaryLink href="/dashboard" label="Return to dashboard" />
          <Link href="/scan" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700">
            Scan another QR
          </Link>
        </div>
      </div>
    </main>
  );
}
