import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import { ViewTransition } from "react";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";

export const bodyFont = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const monoFont = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "Ananthakrishnan | Software Development Engineer",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground smooth-scroll">
        <Header />
        <ViewTransition
          default={{
            default: "auto",
            "navigation-forward": "slide-forward",
            "navigation-back": "slide-back",
          }}
        >
          {children}
        </ViewTransition>
        <Footer />
      </body>
    </html>
  );
}
