import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crm360.example"),
  title: {
    default: "CRM360 | Revenue, People & Operations in One Platform",
    template: "%s | CRM360",
  },
  description:
    "CRM360 is an all-in-one CRM platform to manage leads, HRMS, invoicing, sales, and powerful business integrations from a single dashboard.",
  keywords: [
    "CRM",
    "360 CRM",
    "Lead Management",
    "HRMS",
    "Employee Management",
    "Sales CRM",
    "Invoicing",
    "Business Automation",
    "Workflow Management",
    "Facebook Lead Ads",
    "IndiaMART",
    "99acres",
    "Housing",
    "SaaS",
  ],
  applicationName: "CRM360",
  authors: [{ name: "CRM360" }],
  creator: "CRM360",
  publisher: "CRM360",
  category: "Business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "CRM360",
    title: "CRM360 | Revenue, People & Operations in One Platform",
    description:
      "Manage leads, HRMS, invoicing, and third-party integrations with one powerful CRM platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM360 | Revenue, People & Operations",
    description:
      "The modern CRM platform for sales, HR, invoicing, and business automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} antialiased bg-white text-slate-900 selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}