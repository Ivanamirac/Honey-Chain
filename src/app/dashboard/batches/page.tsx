import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { batches } from "@/lib/honey-data";
import { DashboardShell, SectionCard, StatusPill } from "@/components/honey-ui";

export default function BatchManagementPage() {
  return (
    <DashboardShell title="Batch management" subtitle="6 active records" active="Batches">
      <SectionCard
        title="Honey batches"
        eyebrow="Traceability ledger"
        action={
          <Link href="/dashboard/batches/new" className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
            <PlusCircle className="h-4 w-4" />
            New batch
          </Link>
        }
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="pb-3 pr-4 font-medium">Batch ID</th>
                <th className="pb-3 pr-4 font-medium">Product</th>
                <th className="pb-3 pr-4 font-medium">Origin</th>
                <th className="pb-3 pr-4 font-medium">Quality</th>
                <th className="pb-3 pr-4 font-medium">Verification</th>
                <th className="pb-3 pr-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch) => (
                <tr key={batch.id} className="border-t border-slate-200 align-top">
                  <td className="py-3 pr-4 font-semibold text-slate-900">{batch.id}</td>
                  <td className="py-3 pr-4">{batch.productName}</td>
                  <td className="py-3 pr-4">{batch.origin}</td>
                  <td className="py-3 pr-4">{batch.qualityScore}/100</td>
                  <td className="py-3 pr-4"><StatusPill status={batch.verificationStatus} tone={batch.verificationStatus === "Verified" ? "success" : "warning"} /></td>
                  <td className="py-3 pr-4">
                    <div className="flex gap-2">
                      <Link href={`/dashboard/batches/${batch.id}`} className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:border-emerald-200 hover:text-emerald-700">View</Link>
                      <Link href={`/verify/${batch.id}`} className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:border-emerald-200 hover:text-emerald-700">Verify</Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </DashboardShell>
  );
}
