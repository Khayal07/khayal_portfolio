import type { Metadata } from "next";
import localFont from "next/font/local";
import { portfolio } from "@/data/portfolio";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.add("light");}}catch(e){}})();`;

const siteTitle = `${portfolio.identity.name} | ${portfolio.identity.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.identity.siteUrl),
  title: siteTitle,
  description: portfolio.identity.tagline,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: portfolio.identity.name,
    title: siteTitle,
    description: portfolio.identity.tagline,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: portfolio.identity.tagline,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}