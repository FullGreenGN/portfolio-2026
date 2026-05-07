import type { Metadata } from "next";
import { JetBrains_Mono} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: "fullgreen.polarisdev.fr",
    template: "%s | fullgreen.polarisdev.fr",
  },
  description: "Founder of polarisdev.fr and founder of shoteat.live",
  openGraph: {
    title: "fullgreen.polarisdev.fr",
    description: "Founder of polarisdev.fr and founder of shoteat.live",
    url: "https://fullgreen.polarisdev.fr",
    siteName: "fullgreen.polarisdev.fr",
    images: [
      {
        url: "https://fullgreen.polarisdev.fr/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "FullGreenSPRTN",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
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
      className={cn("h-full", "antialiased", jetbrainsMono.variable, jetbrainsMono.className, "font-sans")}
    >
      <body className="bg-[#121212]">{children}</body>
    </html>
  );
}
