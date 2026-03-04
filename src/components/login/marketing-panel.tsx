import {
  BarChart3,
  FileText,
  Receipt,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Automated Invoicing",
    description:
      "Create, send, and track invoices with automated payment reminders and reconciliation.",
  },
  {
    icon: Receipt,
    title: "Expense Tracking",
    description:
      "Capture receipts, categorise expenses, and monitor spending in real time.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description:
      "Generate profit & loss, balance sheet, and cash flow reports with a single click.",
  },
  {
    icon: Wallet,
    title: "Tax Management",
    description:
      "Stay compliant with automatic tax calculations, filings, and year-end summaries.",
  },
  {
    icon: TrendingUp,
    title: "Cash Flow Forecasting",
    description:
      "Predict future cash positions with AI-powered projections and scenario planning.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description:
      "256-bit encryption, multi-factor authentication, and SOC 2 Type II compliance.",
  },
];

export function MarketingPanel() {
  return (
    <div className="flex h-full flex-col justify-between bg-primary p-10 text-primary-foreground lg:p-14">
      <div>
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground">
            <Wallet className="size-5 text-primary" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Ledgr</span>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight lg:text-4xl">
          Modern accounting for growing businesses.
        </h1>
        <p className="max-w-md text-primary-foreground/70 leading-relaxed">
          Everything you need to manage finances, stay compliant, and make smarter decisions — all in one place.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="flex gap-3">
            <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary-foreground/10">
              <feature.icon className="size-4 text-primary-foreground/80" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">{feature.title}</span>
              <span className="text-xs leading-relaxed text-primary-foreground/60">
                {feature.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-xs text-primary-foreground/40">
          Trusted by 12,000+ businesses worldwide
        </p>
      </div>
    </div>
  );
}
