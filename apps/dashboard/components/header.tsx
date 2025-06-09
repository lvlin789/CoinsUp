import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Button } from "@repo/design-system/components/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@repo/design-system/components/sheet";
import { Sidebar } from "./sidebar";
import { Inbox } from "@novu/nextjs";

export const Header = () => {
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="flex flex-1 items-center justify-between">
        <h1 className="font-semibold text-lg">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Inbox
            applicationIdentifier="jyVz372uOG14"
            subscriberId="68458e33c31463d57f99582e"
            appearance={{
              variables: {
                colorPrimary: "#000000",
                colorForeground: "#0E121B",
              },
            }}
          />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
};
