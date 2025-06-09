import "./styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { fonts } from "@repo/design-system/lib/fonts";
import { DesignSystemProvider } from "@repo/design-system";
import MobileBottomNav from '../components/MobileBottomNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={fonts} suppressHydrationWarning>
        <body>
          <DesignSystemProvider>
            <div className="min-h-screen pb-14">{children}</div>
            <MobileBottomNav />
          </DesignSystemProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
