import Link from "next/link";
import { Copy, Download, Printer, QrCode } from "lucide-react";
import { batches } from "@/lib/honey-data";
import { DashboardShell, SectionCard, StatusPill } from "@/components/honey-ui";

export default function BatchQrPage() {
  const batch = batches[0];

  return (
    <DashboardShell title="QR generation" subtitle="Verification URL ready" active="QR">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Batch QR" eyebrow="Generate and manage">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50">
              <div className="flex h-44 w-44 items-center justify-center rounded-2xl bg-white shadow-sm">
                <QrCode className="h-20 w-20 text-emerald-700" />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800">Generate QR</button>
              <button className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700">Download</button>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Verification details" eyebrow="Batch link">
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Batch</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{batch.id}</p>
              <p className="mt-2 text-sm text-slate-600">{batch.productName} · {batch.origin}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">QR destination</p>
              <p className="mt-2 break-all font-mono text-sm text-slate-700">http://localhost:3000/verify/{batch.id}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"> <Copy className="h-4 w-4" /> Copy link</button>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"> <Printer className="h-4 w-4" /> Print</button>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"> <Download className="h-4 w-4" /> Download</button>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-emerald-800">QR design note</p>
              <p className="mt-2">The QR uses a verification URL or batch ID, not the full product payload. This keeps the consumer flow privacy-conscious and supports later marketplace integrations.</p>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-3">
              <span className="text-slate-600">Verification status</span>
              <StatusPill status={batch.verificationStatus} tone="success" />
            </div>
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
