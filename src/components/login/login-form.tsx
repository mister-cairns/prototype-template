import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Wallet } from "lucide-react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-12 lg:px-16">
      <div className="w-full max-w-sm">
        {/* Mobile logo */}
        <div className="mb-10 flex items-center gap-2.5 lg:hidden">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
            <Wallet className="size-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Ledgr
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Welcome back
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Sign in to your account to continue managing your finances.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">
              Remember me for 30 days
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Sign in
          </Button>
        </form>

        <div className="relative mt-6 flex items-center">
          <Separator className="flex-1" />
          <span className="bg-background px-3 text-xs text-muted-foreground">
            or continue with
          </span>
          <Separator className="flex-1" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="outline" size="lg" className="w-full">
            <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Google</span>
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.08-.02-.16-.02-.27 0-1.09.512-2.27 1.177-3.08C13.535 1.87 14.7 1.18 15.76 1c.01.13.02.26.02.43h.585zm4.565 17.71c-.34.82-.56 1.18-.93 1.94-.52.99-1.26 2.23-2.17 2.24-.81.02-1.02-.53-2.12-.52-1.1 0-1.33.53-2.14.54-.91.01-1.6-1.11-2.13-2.1-1.47-2.76-1.62-6.01-.72-7.74.64-1.22 1.75-1.94 2.78-1.94 1.03 0 1.68.53 2.53.53.82 0 1.32-.53 2.5-.53.93 0 1.92.5 2.56 1.37-2.25 1.23-1.88 4.44.41 5.3-.37.86-.56 1.24-.93 2.05l-.62-1.14h.93z" />
            </svg>
            <span>Apple</span>
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {"Don't have an account? "}
          <a
            href="#"
            className="font-medium text-foreground hover:underline underline-offset-4"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
