import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bibek Kumar Dey",
  description: "Bibek Kumar Dey's Portfolio - Full Stack Developer & Software Engineer",
  keywords: ["Bibek Kumar Dey", "Portfolio", "Full Stack Developer", "Software Engineer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Bibek Kumar Dey" }],
  creator: "Bibek Kumar Dey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bibek-kumar-dey.vercel.app",
    title: "Bibek Kumar Dey - Full Stack Developer",
    description: "Bibek Kumar Dey's Portfolio - Full Stack Developer & Software Engineer specializing in React, Next.js, and modern web technologies",
    siteName: "Bibek Kumar Dey Portfolio",
    images: [
      {
        url: "/OG_Image.png",
        width: 1200,
        height: 630,
        alt: "Bibek Kumar Dey - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibek Kumar Dey - Full Stack Developer",
    description: "Bibek Kumar Dey's Portfolio - Full Stack Developer & Software Engineer",
    images: ["/OG_Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://bibek-kumar-dey.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
