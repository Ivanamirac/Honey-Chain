import { CheckCircle2, MapPin, TrendingUp } from "lucide-react";
import { marketItems } from "@/lib/honey-data";
import { SectionCard, StatusPill } from "@/components/honey-ui";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Honey Chain</p>
          <h1 className="mt-2 text-3xl font-bold">Market access</h1>
          <p className="mt-2 max-w-2xl text-slate-600">Verified rural honey products can be matched to buyers and export channels with trusted producer data, quality and traceability records.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {marketItems.map((item) => (
            <SectionCard key={item.id} title={item.productName} eyebrow={item.origin} action={<StatusPill status={item.exportReady ? "Export ready" : "Review"} tone={item.exportReady ? "success" : "warning"} />}>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between"><span>Producer</span><span className="font-bold text-slate-900">{item.beekeeper}</span></div>
                <div className="flex items-center justify-between"><span>Quality</span><span className="font-bold text-slate-900">{item.qualityScore}/100</span></div>
                <div className="flex items-center justify-between"><span>Price</span><span className="font-bold text-slate-900">₹{item.pricePerKg}/kg</span></div>
                <div className="flex items-center justify-between"><span>Buyer interest</span><span className="font-bold text-slate-900">{item.buyerInterest}</span></div>
              </div>
              <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-sm text-emerald-900">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Batch verification complete</div>
              </div>
            </SectionCard>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <TrendingUp className="h-6 w-6 text-emerald-700" />
            <p className="mt-3 text-lg font-semibold text-slate-900">Higher yields</p>
            <p className="mt-2 text-sm text-slate-600">Improved batch data supports better pricing and farm planning.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <MapPin className="h-6 w-6 text-amber-700" />
            <p className="mt-3 text-lg font-semibold text-slate-900">Regional traceability</p>
            <p className="mt-2 text-sm text-slate-600">Buyers can verify origin and beekeeper history before purchase.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <CheckCircle2 className="h-6 w-6 text-sky-700" />
            <p className="mt-3 text-lg font-semibold text-slate-900">Export readiness</p>
            <p className="mt-2 text-sm text-slate-600">Quality and compliance data helps unlock premium channels and export access.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
