import { MarketingPanel } from "@/components/login/marketing-panel";
import { LoginForm } from "@/components/login/login-form";

export function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      {/* Marketing panel - hidden on mobile, shown on lg+ */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%]">
        <MarketingPanel />
      </div>

      {/* Login form */}
      <div className="flex flex-1 bg-background">
        <LoginForm />
      </div>
    </main>
  );
}
