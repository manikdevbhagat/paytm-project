import type { Metadata } from "next";
import localFont from "next/font/local";
import "@repo/ui/globals.css";
import { Providers } from "./providers";
import AppbarClient from "../components/AppbarClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple Wallet App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} h-full w-full max-h-screen`}
        >
          <div className="flex flex-col w-full h-full">
            <AppbarClient />
            <div className="flex-1 overflow-hidden">{children}</div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
