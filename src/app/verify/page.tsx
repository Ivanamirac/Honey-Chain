import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, Search, ShieldCheck } from "lucide-react";
import { batches } from "@/lib/honey-data";
import { PrimaryLink, SectionCard, StatusPill } from "@/components/honey-ui";

export default function VerifyLandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Honey Chain</p>
            <h1 className="mt-2 text-3xl font-bold">Consumer verification</h1>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-emerald-200 hover:text-emerald-700">
            Back to home
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <SectionCard title="Verify product authenticity" eyebrow="QR verification" action={<StatusPill status="Prototype" tone="info" />}>
            <div className="rounded-3xl border border-dashed border-emerald-200 bg-emerald-50 p-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                <Camera className="h-8 w-8" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">Scan or enter a batch ID</h2>
              <p className="mt-2 text-sm text-slate-600">The QR contains a verification URL or batch identifier, which is checked against the local hash ledger and traceability record.</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <PrimaryLink href="/scan" label="Open scanner" />
                <Link href={`/verify/${batches[0].id}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700">
                  View sample batch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Batch ID</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  aria-label="Batch ID"
                  value={batches[0].id}
                  readOnly
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none"
                />
                <Link href={`/verify/${batches[0].id}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800">
                  <Search className="h-4 w-4" />
                  Verify
                </Link>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Verification trust model" eyebrow="How it works">
            <div className="space-y-4">
              {[
                ["1", "QR encodes batch ID or verification URL only."],
                ["2", "Backend fetches the batch and trace history."],
                ["3", "Ledger hash is recalculated and compared."],
                ["4", "User sees authenticity result and timeline."],
              ].map(([step, text]) => (
                <div key={step} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700">{step}</div>
                  <p className="text-sm text-slate-600">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-700" />
                <p>This prototype uses a local ledger/hash adapter designed to be replaced by Hyperledger Fabric or a similar permissioned blockchain in production.</p>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Authenticity", "Verified batch records with hash comparison"],
            ["Origin", "State and apiary-level provenance"],
            ["Quality", "Moisture, purity, and lab verification"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-emerald-700" />
              <p className="mt-3 text-lg font-semibold">{title}</p>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
