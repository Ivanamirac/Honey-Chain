import Link from "next/link";
import { Camera, Flashlight, QrCode, ShieldCheck } from "lucide-react";
import { PrimaryLink, SectionCard, StatusPill } from "@/components/honey-ui";

export default function ScanPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Honey Chain</p>
            <h1 className="mt-2 text-3xl font-bold">QR scanner</h1>
          </div>
          <Link href="/verify" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-emerald-200 hover:text-emerald-700">
            Back to verification
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionCard title="Scan a product QR" eyebrow="Consumer verification" action={<StatusPill status="Demo" tone="info" />}>
            <div className="rounded-[30px] border border-slate-200 bg-white p-4">
              <div className="relative mx-auto flex h-[360px] max-w-[360px] items-center justify-center overflow-hidden rounded-[26px] border-2 border-dashed border-emerald-200 bg-[radial-gradient(circle_at_center,_#f0fdf4,_#fff)]">
                <div className="absolute inset-5 rounded-[18px] border border-emerald-100" />
                <div className="absolute inset-10 rounded-[18px] border-2 border-emerald-700/30" />
                <div className="absolute h-40 w-40 rounded-2xl border-4 border-emerald-700/80 shadow-[0_0_0_8px_rgba(16,122,82,0.08)]" />
                <div className="absolute flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-lg">
                  <QrCode className="h-7 w-7" />
                </div>
                <div className="absolute bottom-5 flex gap-3">
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"> <Camera className="h-4 w-4" /> Camera</button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"> <Flashlight className="h-4 w-4" /> Flash</button>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Result" eyebrow="Latest scan">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-emerald-700" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Status</p>
                  <p className="text-2xl font-bold text-slate-900">Verified</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-700">Batch HC-2026-00125 matched the recorded ledger record and traceability timeline.</p>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span className="text-slate-600">Batch</span><span className="font-bold text-slate-900">HC-2026-00125</span></div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span className="text-slate-600">Origin</span><span className="font-bold text-slate-900">Tamil Nadu</span></div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3"><span className="text-slate-600">Quality</span><span className="font-bold text-slate-900">94/100</span></div>
            </div>

            <div className="mt-5">
              <PrimaryLink href="/verify/HC-2026-00125" label="Open detailed verification" />
            </div>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
