import Link from "next/link";
import { AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Sprout } from "lucide-react";
import type { ReactNode } from "react";

export type Tone = "success" | "warning" | "neutral" | "danger" | "info";

export function StatusPill({ status, tone = "neutral" }: { status: string; tone?: Tone }) {
  const palette: Record<Tone, string> = {
    success: "bg-emerald-100 text-emerald-800 border-emerald-200",
    warning: "bg-amber-100 text-amber-800 border-amber-200",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
    danger: "bg-rose-100 text-rose-700 border-rose-200",
    info: "bg-sky-100 text-sky-700 border-sky-200",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${palette[tone]}`}>
      {status}
    </span>
  );
}

export function SectionCard({
  title,
  eyebrow,
  action,
  children,
}: {
  title: string;
  eyebrow?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm ring-1 ring-black/5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          {eyebrow ? <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">{eyebrow}</p> : null}
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function StatCard({
  label,
  value,
  delta,
  icon,
}: {
  label: string;
  value: string;
  delta: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">{icon}</div>
        <span className="text-xs font-semibold text-emerald-700">{delta}</span>
      </div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}

export function DashboardShell({
  title,
  subtitle,
  children,
  active,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  active: string;
}) {
  const navItems = [
    ["Overview", "/dashboard"],
    ["Hives", "/dashboard/hives"],
    ["Batches", "/dashboard/batches"],
    ["QR", "/dashboard/qr"],
    ["AI Insights", "/dashboard/insights"],
    ["Quality", "/dashboard/quality"],
    ["Supply Chain", "/dashboard/supply-chain"],
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-emerald-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-sm">
              <Sprout className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Honey Chain</p>
              <p className="text-sm text-slate-500">Trust should travel with the honey.</p>
            </div>
          </div>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${active === label ? "bg-emerald-700 text-white" : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              Verified beekeeper
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Dashboard</p>
            <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">Live</span>
            {subtitle}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export function VerificationTimeline({ events }: { events: { stage: string; status: string; timestamp: string; actor: string; description: string }[] }) {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={`${event.stage}-${index}`} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-col items-center">
            <div className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full ${event.status === "Verified" ? "bg-emerald-600 text-white" : "bg-amber-100 text-amber-700"}`}>
              {event.status === "Verified" ? <CheckCircle2 className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
            </div>
            {index !== events.length - 1 ? <div className="mt-2 h-full w-px bg-slate-200" /> : null}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="font-semibold text-slate-900">{event.stage}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{event.actor}</p>
              </div>
              <StatusPill status={event.status} tone={event.status === "Verified" ? "success" : "warning"} />
            </div>
            <p className="mt-2 text-sm text-slate-600">{event.description}</p>
            <p className="mt-2 text-xs text-slate-500">{event.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PrimaryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800">
      {label}
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

export function QuickAction({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm font-medium text-emerald-800 transition hover:bg-emerald-100">
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function InfoNotice({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 h-5 w-5 text-amber-700" />
        <p>{text}</p>
      </div>
    </div>
  );
}
