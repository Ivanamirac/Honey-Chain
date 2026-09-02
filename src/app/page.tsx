import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, Leaf, MapPin, QrCode, ShieldCheck, Siren } from "lucide-react";
import { batches, hives, marketItems } from "@/lib/honey-data";
import { PrimaryLink, SectionCard, StatusPill } from "@/components/honey-ui";

export default function HomePage() {
  const featuredBatch = batches[0];
  const hiveCount = hives.length;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f6fdf8,_#ffffff_45%)] text-slate-900">
      <header className="border-b border-emerald-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-sm">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Honey Chain</p>
              <p className="text-sm text-slate-500">From the hive to your home.</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/verify" className="text-sm font-medium text-slate-600 hover:text-emerald-700">Verify</Link>
            <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-emerald-700">Dashboard</Link>
            <Link href="/marketplace" className="text-sm font-medium text-slate-600 hover:text-emerald-700">Marketplace</Link>
            <Link href="/admin" className="text-sm font-medium text-slate-600 hover:text-emerald-700">Admin</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/scan" className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
              <QrCode className="h-4 w-4" />
              Scan QR
            </Link>
            <PrimaryLink href="/dashboard" label="Open app" />
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-800">
                <BadgeCheck className="h-4 w-4" />
                Traceability for ethical honey supply chains
              </div>
              <h1 className="max-w-xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
                Trust should travel with the honey.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-600">
                Honey Chain combines traceability, IoT hive monitoring, AI-assisted insights, and tamper-evident batch records to bring transparent quality assurance to rural beekeeping.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryLink href="/verify" label="Verify a batch" />
                <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:border-emerald-200 hover:text-emerald-700">
                  Beekeeper dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">
                <div>
                  <p className="text-2xl font-bold text-slate-900">{hiveCount}+ hives</p>
                  <p>Live monitor coverage</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">94/100</p>
                  <p>Average quality score</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">92%</p>
                  <p>Verified batches</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-emerald-100 bg-white p-5 shadow-[0_20px_60px_rgba(16,80,40,0.10)]">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Featured batch</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{featuredBatch.id}</h2>
                </div>
                <StatusPill status="Verified" tone="success" />
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-emerald-50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Product</p>
                      <p className="text-xl font-bold text-slate-900">{featuredBatch.productName}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">Quality</p>
                      <p className="text-xl font-bold text-emerald-700">{featuredBatch.qualityScore}/100</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Origin</p>
                    <p className="mt-2 font-semibold text-slate-900">{featuredBatch.origin}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Harvester</p>
                    <p className="mt-2 font-semibold text-slate-900">{featuredBatch.beekeeper}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Harvest date</p>
                    <p className="mt-2 font-semibold text-slate-900">25 Aug 2026</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Ledger</p>
                    <p className="mt-2 font-semibold text-slate-900">Hash validated</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <PrimaryLink href={`/verify/${featuredBatch.id}`} label="Verify product" />
                  <Link href="/dashboard/qr" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-emerald-200 hover:text-emerald-700">
                    Generate QR
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><ShieldCheck className="h-5 w-5" /></div>
              <div>
                <p className="text-sm text-slate-500">Blockchain proof</p>
                <p className="text-xl font-bold text-slate-900">Local hash ledger</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700"><BarChart3 className="h-5 w-5" /></div>
              <div>
                <p className="text-sm text-slate-500">AI insights</p>
                <p className="text-xl font-bold text-slate-900">Hive risk analysis</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><MapPin className="h-5 w-5" /></div>
              <div>
                <p className="text-sm text-slate-500">Origin tracking</p>
                <p className="text-xl font-bold text-slate-900">State-level traceability</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700"><Siren className="h-5 w-5" /></div>
              <div>
                <p className="text-sm text-slate-500">Alerts</p>
                <p className="text-xl font-bold text-slate-900">1 medium-risk hive</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <SectionCard title="How the workflow works" eyebrow="Traceability" action={<StatusPill status="Prototype" tone="info" />}>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["Hive health", "Sensors capture temperature, humidity, and hive activity in real time."],
                ["Harvest", "Beekeepers record batch origin and production details."],
                ["Quality", "Lab results verify purity, moisture, and authenticity."],
                ["Consumer verification", "A QR scan confirms the batch and ledger history."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{title}</p>
                  <p className="mt-3 text-sm text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <SectionCard title="Marketplace preview" eyebrow="Market access">
            <div className="grid gap-4 md:grid-cols-3">
              {marketItems.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-slate-900">{item.productName}</p>
                    <StatusPill status={item.exportReady ? "Export ready" : "Review"} tone={item.exportReady ? "success" : "warning"} />
                  </div>
                  <p className="mt-3 text-sm text-slate-500">{item.origin}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                    <span>{item.beekeeper}</span>
                    <span>{item.qualityScore}/100 quality</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
                    <span className="font-semibold text-slate-900">₹{item.pricePerKg}/kg</span>
                    <span className="text-emerald-700">Buyer interest: {item.buyerInterest}</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>
      </main>
    </main>
  );
}
