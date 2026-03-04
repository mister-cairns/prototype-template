import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3Icon,
  FileTextIcon,
  ShieldCheckIcon,
  ZapIcon,
  UsersIcon,
  CloudIcon,
  ArrowRightIcon,
} from "lucide-react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <div className="bg-secondary text-secondary-foreground flex size-10 shrink-0 items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function MarketingPanel() {
  const features: FeatureItemProps[] = [
    {
      icon: <BarChart3Icon className="size-5" />,
      title: "Real-time Financial Dashboards",
      description:
        "Track revenue, expenses, and cash flow with live dashboards that update as transactions occur.",
    },
    {
      icon: <FileTextIcon className="size-5" />,
      title: "Automated Invoicing",
      description:
        "Generate professional invoices in seconds. Set up recurring billing and automatic payment reminders.",
    },
    {
      icon: <ShieldCheckIcon className="size-5" />,
      title: "Bank-grade Security",
      description:
        "256-bit encryption, SOC 2 compliance, and multi-factor authentication keep your data safe.",
    },
    {
      icon: <ZapIcon className="size-5" />,
      title: "Smart Reconciliation",
      description:
        "AI-powered transaction matching reduces manual reconciliation effort by up to 90%.",
    },
    {
      icon: <UsersIcon className="size-5" />,
      title: "Multi-user Collaboration",
      description:
        "Invite your team with role-based permissions. Accountants, bookkeepers, and managers get tailored views.",
    },
    {
      icon: <CloudIcon className="size-5" />,
      title: "Cloud-based Access",
      description:
        "Access your accounts from anywhere. All data is synced in real-time across every device.",
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground flex flex-col justify-between p-10 lg:p-14">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Badge variant="secondary" className="w-fit">
            Trusted by 10,000+ businesses
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight text-balance">
            Everything you need to manage your finances
          </h2>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Cinch brings clarity to your accounting with powerful tools designed
            for growing businesses.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <p className="text-primary-foreground/50 mt-10 text-xs">
        Join thousands of businesses that trust Cinch for their accounting
        needs.
      </p>
    </div>
  );
}

function LoginPanel() {
  return (
    <div className="bg-background flex flex-col items-center justify-center p-8 lg:p-14">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Sign in to Cinch
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your credentials to access your account
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>
              Sign in with your email and password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email address</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </Field>
              </FieldGroup>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
                <Button variant="link" className="h-auto p-0 text-sm">
                  Forgot password?
                </Button>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Sign in
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <div className="relative w-full">
              <Separator />
              <span className="bg-card text-muted-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs">
                or
              </span>
            </div>
            <Button variant="outline" size="lg" className="w-full">
              Continue with SSO
            </Button>
          </CardFooter>
        </Card>

        <p className="text-muted-foreground mt-6 text-center text-sm">
          {"Don't have an account? "}
          <Button variant="link" className="h-auto p-0 text-sm font-medium">
            Get started
          </Button>
        </p>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="bg-background flex min-h-screen">
      <div className="grid w-full lg:grid-cols-2">
        {/* Marketing panel - left side */}
        <div className="hidden lg:flex">
          <MarketingPanel />
        </div>

        {/* Login panel - right side */}
        <LoginPanel />
      </div>
    </div>
  );
}
