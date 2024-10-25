import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
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

export const metadata: Metadata = {
  title: "Ayush Tiwari's Portfolio",
  description: "Ayush Tiwari's developer portfolio. A collection of projects, my journey, and more.",
  openGraph: {
    type: "website",
    url: "https://ayush-tiwari.me",
    title: "Ayush Tiwari's Portfolio",
    description: "Ayush Tiwari's developer portfolio. A collection of his projects, journey, and more.",
    images: [{
      url: "https://github.com/user-attachments/assets/3a998c76-a08c-4052-855a-8c3edd68a1b3",
    }],
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
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
