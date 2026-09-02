import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { DashboardShell, SectionCard, StatusPill } from "@/components/honey-ui";

export default function NewBatchPage() {
  return (
    <DashboardShell title="Create honey batch" subtitle="Draft record" active="Batches">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Batch details" eyebrow="New record">
          <form className="space-y-4">
            {[
              ["Batch ID", "HC-2026-00126"],
              ["Product name", "Hill Honey"],
              ["Honey variety", "Wildflower"],
              ["Beekeeper", "Ananya Beekeepers"],
              ["Apiary", "Ananya Apiary"],
              ["Hive", "HIVE-01"],
              ["Origin", "Tamil Nadu"],
              ["Harvest date", "2026-09-03"],
              ["Quantity", "72 kg"],
            ].map(([label, value]) => (
              <div key={label}>
                <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
                <input defaultValue={value} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-emerald-300" />
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <button type="button" className="rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800">Create batch</button>
              <Link href="/dashboard/batches" className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700">Cancel</Link>
            </div>
          </form>
        </SectionCard>

        <SectionCard title="Batch preview" eyebrow="After creation">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-600">Status</p>
              <StatusPill status="Draft" tone="info" />
            </div>
            <p className="mt-4 text-2xl font-bold text-slate-900">HC-2026-00126</p>
            <p className="mt-2 text-sm text-slate-600">Generated batch identifier will be used for the QR verification URL and ledger hash registration.</p>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-white p-3 text-sm text-slate-600">
              <PlusCircle className="h-4 w-4 text-emerald-700" />
              QR code will point to http://localhost:3000/verify/HC-2026-00126
            </div>
          </div>
        </SectionCard>
      </div>
    </DashboardShell>
  );
}
