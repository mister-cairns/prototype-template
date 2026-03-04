import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  BarChart3Icon,
  CheckIcon,
  FileTextIcon,
  LockIcon,
  ReceiptIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Feature list data                                                          */
/* -------------------------------------------------------------------------- */

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <BarChart3Icon className="size-5" />,
    title: "Real-time dashboards",
    description:
      "Get a live view of cash flow, revenue, and expenses across all your accounts.",
  },
  {
    icon: <ReceiptIcon className="size-5" />,
    title: "Automated invoicing",
    description:
      "Create, send, and track invoices automatically with smart payment reminders.",
  },
  {
    icon: <FileTextIcon className="size-5" />,
    title: "Tax-ready reports",
    description:
      "Generate BAS, P&L, and balance sheet reports that are ready for your accountant.",
  },
  {
    icon: <WalletIcon className="size-5" />,
    title: "Bank reconciliation",
    description:
      "Automatically match transactions with bank feeds to keep your books accurate.",
  },
  {
    icon: <TrendingUpIcon className="size-5" />,
    title: "Forecasting tools",
    description:
      "Project future cash flow and revenue based on historical trends and current data.",
  },
  {
    icon: <LockIcon className="size-5" />,
    title: "Enterprise-grade security",
    description:
      "Your financial data is protected with end-to-end encryption and multi-factor authentication.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Marketing panel                                                            */
/* -------------------------------------------------------------------------- */

function MarketingPanel() {
  return (
    <div className="bg-primary text-primary-foreground flex flex-col justify-center px-10 py-12 lg:px-16">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-semibold tracking-tight text-balance">
          The smarter way to manage your business finances
        </h1>
        <p className="mt-3 text-sm leading-relaxed opacity-80">
          Join thousands of businesses that trust Ledger to simplify
          bookkeeping, streamline invoicing, and stay on top of compliance.
        </p>

        <div className="mt-10 flex flex-col gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="bg-primary-foreground/15 flex size-9 shrink-0 items-center justify-center rounded-lg">
                {feature.icon}
              </div>
              <div>
                <p className="text-sm font-medium">{feature.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed opacity-70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-primary-foreground/20 border-primary flex size-7 items-center justify-center rounded-full border-2 text-xs font-medium"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-xs opacity-70">
            Trusted by 12,000+ businesses worldwide
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Login form                                                                 */
/* -------------------------------------------------------------------------- */

function LoginForm() {
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <div className="bg-background flex flex-col items-center justify-center px-6 py-12 lg:px-16">
      <div className="w-full max-w-sm">
        {/* Logo / brand mark */}
        <div className="mb-8 flex items-center gap-2">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg">
            <BarChart3Icon className="size-4" />
          </div>
          <span className="text-foreground text-lg font-semibold">Ledger</span>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Sign in to your account</CardTitle>
            <CardDescription>
              Enter your credentials below to continue
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email address</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                </Field>
              </FieldGroup>

              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked === true)
                    }
                  />
                  Remember me
                </Label>
                <button
                  type="button"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <Button size="lg" className="w-full">
                Sign in
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-4">
            <div className="relative flex w-full items-center">
              <Separator className="flex-1" />
              <span className="text-muted-foreground bg-card px-3 text-xs">
                or continue with
              </span>
              <Separator className="flex-1" />
            </div>

            <div className="flex w-full gap-3">
              <Button variant="outline" className="flex-1">
                <GoogleIcon />
                Google
              </Button>
              <Button variant="outline" className="flex-1">
                <MicrosoftIcon />
                Microsoft
              </Button>
            </div>
          </CardFooter>
        </Card>

        <p className="text-muted-foreground mt-6 text-center text-sm">
          {"Don't have an account? "}
          <button
            type="button"
            className="text-primary font-medium hover:underline"
          >
            Start your free trial
          </button>
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          {["SOC 2", "GDPR", "256-bit SSL"].map((badge) => (
            <div
              key={badge}
              className="text-muted-foreground flex items-center gap-1 text-xs"
            >
              <CheckIcon className="text-primary size-3" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Social icons (inline SVGs for Google & Microsoft)                          */
/* -------------------------------------------------------------------------- */

function GoogleIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="10"
        height="10"
        fill="currentColor"
        opacity="0.9"
      />
      <rect
        x="13"
        y="1"
        width="10"
        height="10"
        fill="currentColor"
        opacity="0.7"
      />
      <rect
        x="1"
        y="13"
        width="10"
        height="10"
        fill="currentColor"
        opacity="0.6"
      />
      <rect
        x="13"
        y="13"
        width="10"
        height="10"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page export                                                                */
/* -------------------------------------------------------------------------- */

export function HomePage() {
  return (
    <div className="bg-background grid min-h-screen lg:grid-cols-2">
      <MarketingPanel />
      <LoginForm />
    </div>
  );
}
