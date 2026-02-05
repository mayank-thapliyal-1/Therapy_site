import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa
          Monica
        </title>
        {/* Canonical URL */}
        <link rel="canonical" href="https://therapy-site-xi.vercel.app/" />
        {/* Favicon */}
        <meta name="theme-color" content="#E8D5D1" />
        <meta name="format-detection" content="telephone=yes" />
        {/* Local Business Schema (JSON-LD) */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
