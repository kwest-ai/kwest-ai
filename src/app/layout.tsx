import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KwestAI | Autonomous QA Platform",
    template: "%s | KwestAI"
  },
  description: "Autonomous AI-powered QA platform: generate, self-heal & analyze end-to-end tests. Ship faster with higher confidence.",
  applicationName: "KwestAI",
  keywords: ["QA automation","AI testing","autonomous testing","end-to-end tests","quality gates","flaky test detection"],
  authors: [{ name: "KwestAI" }],
  openGraph: {
    title: "KwestAI – Autonomous AI-Powered QA Platform",
    description: "Generate resilient tests, scale execution, analyze failures instantly & ship continuously.",
    url: "https://www.kwest.ai",
    siteName: "KwestAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KwestAI – Autonomous AI-Powered QA Platform",
    description: "Generate resilient tests, scale execution, analyze failures instantly & ship continuously.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
  {/* Skip to content link for keyboard users */}
  <a href="#main-content" className="skip-link">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'KwestAI',
              url: 'https://www.kwest.ai',
              logo: 'https://www.kwest.ai/logo.png',
              sameAs: [
                'https://www.linkedin.com/company/kwestai'
              ],
              offers: {
                '@type': 'Offer',
                url: 'https://www.kwest.ai',
                category: 'Software'
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'KwestAI',
              applicationCategory: 'QA Automation',
              operatingSystem: 'Any',
              description: 'Autonomous AI-powered QA platform to generate, self-heal & analyze end-to-end tests.',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
