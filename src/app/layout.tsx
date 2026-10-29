import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://talos-payments.vercel.app"),
  title: {
    default: "Talos — Financial infrastructure for the internet",
    template: "%s | Talos",
  },
  description:
    "Talos is programmable financial infrastructure: accept payments online and in person, embed financial services, and launch new revenue models from one API.",
  applicationName: "Talos",
  keywords: [
    "payments",
    "financial infrastructure",
    "payment API",
    "online payments",
    "subscriptions",
    "payouts",
  ],
  openGraph: {
    type: "website",
    siteName: "Talos",
    title: "Talos — Financial infrastructure for the internet",
    description:
      "Accept payments, embed financial services and launch new revenue models from one API.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talos — Financial infrastructure for the internet",
    description:
      "Accept payments, embed financial services and launch new revenue models from one API.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-sand font-sans text-ink-soft antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
