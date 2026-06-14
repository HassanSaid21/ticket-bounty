import "./globals.css";

import type { Metadata } from "next";
import { Geist, Roboto } from "next/font/google";

import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";

const robotoHeading = Roboto({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ticketbounty",
  description: "A ticket management app built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable, robotoHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1 flex-col flex gap-4  overflow-y-auto overflow-x-hidden min-h-screen  py-24  px-8 bg-secondary/20 rounded-lg shadow-lg">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
