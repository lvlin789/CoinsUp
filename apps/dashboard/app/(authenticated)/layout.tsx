import { auth, currentUser } from "@clerk/nextjs/server";
import { ScrollArea } from "@repo/design-system/components/scroll-area";
import { Header } from "../..//components/header";
import { Sidebar } from "../../components/sidebar";

export default async function ({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  const { redirectToSignIn } = await auth();

  if (!user) {
    return redirectToSignIn();
  }

  return (
    <div className="flex min-h-screen">
      {/* 桌面端侧边栏 */}
      <aside className="hidden w-64 border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <ScrollArea className="h-full py-6">
          <Sidebar />
        </ScrollArea>
      </aside>

      {/* 主内容区 */}
      <div className="flex-1">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
