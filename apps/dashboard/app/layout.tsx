import type { Metadata } from "next";
import "./styles.css";
import { fonts } from '@repo/design-system/lib/fonts';
import { DesignSystemProvider } from '@repo/design-system';


import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={fonts} suppressHydrationWarning>
        <body >
          <DesignSystemProvider>
            {children}
          </DesignSystemProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
