import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Honey Chain</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">Batch not found</h1>
        <p className="mt-3 text-sm text-slate-600">The requested traceability record could not be located in the local ledger prototype.</p>
        <Link href="/verify" className="mt-6 inline-flex rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
          Return to verification
        </Link>
      </div>
    </div>
  );
}
