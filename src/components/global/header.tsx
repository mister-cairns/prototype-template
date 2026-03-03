import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import headerConfig from "@/config/header.json";

interface NavItem {
  /** Display label for the nav item */
  label: string;
  /** URL path to navigate to */
  href: string;
  /** Whether this nav item is currently active */
  active?: boolean;
}

interface HeaderProps {
  /** Optional title to override the config title */
  title?: string;
  /** Optional logo to override the config logo */
  logo?: string;
  /** Optional navigation items to override the config navItems */
  navItems?: NavItem[];
  /** Optional className for additional styling */
  className?: string;
  /** Optional children for right-side content (e.g., buttons, user menu) */
  children?: React.ReactNode;
}

/**
 * Global Header component for prototype pages.
 * Use this component when building product headers or navigation bars.
 * By default, it reads from `src/config/header.json`.
 *
 * @example
 * // Uses config from src/config/header.json
 * <Header />
 *
 * // Overrides config
 * <Header
 *   title="My Dashboard"
 *   navItems={[
 *     { label: "Overview", href: "/dashboard", active: true },
 *     { label: "Reports", href: "/dashboard/reports" },
 *     { label: "Settings", href: "/dashboard/settings" },
 *   ]}
 * >
 *   <Button variant="secondary">Profile</Button>
 * </Header>
 */
export function Header({
  title,
  logo,
  navItems,
  className,
  children,
}: HeaderProps) {
  const displayTitle = title ?? headerConfig.title;
  const displayLogo = logo ?? headerConfig.logo;
  const displayNavItems = navItems ?? headerConfig.navItems;

  return (
    <header
      className={cn(
        "bg-primary text-primary-foreground",
        "flex h-14 items-center justify-between px-6",
        "border-b border-primary/20",
        className,
      )}
    >
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <span className="text-xl">{displayLogo}</span>
          </Link>
          <h1 className="text-lg font-semibold">{displayTitle}</h1>
        </div>
        {displayNavItems && displayNavItems.length > 0 && (
          <nav className="flex items-center gap-1">
            {displayNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  item.active
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </header>
  );
}
