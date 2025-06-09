import Link from "next/link";
import { Separator } from "@repo/design-system/components/separator";
import { cn } from "@repo/design-system/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Overview
          </h2>
          <div className="space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
            >
              Dashboard
            </Link>
            <Link
              href="/analytics"
              className="flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
            >
              Analytics
            </Link>
            <Link
              href="/reports"
              className="flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
            >
              Reports
            </Link>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Settings
          </h2>
          <div className="space-y-1">
            <Link
              href="/profile"
              className="flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
            >
              Profile
            </Link>
            <Link
              href="/billing"
              className="flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
            >
              Billing
            </Link>
            <Link
              href="/settings"
              className="flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
