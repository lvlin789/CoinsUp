import "./styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { fonts } from "@repo/design-system/lib/fonts";
import { DesignSystemProvider } from "@repo/design-system";
import { use } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={fonts} suppressHydrationWarning>
        <body>
          <DesignSystemProvider>{children}</DesignSystemProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
