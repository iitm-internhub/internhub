import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/components/context/theme-provider";
import Head from "next/head";
import Logo from '@/public/icons/InternhubLogo.svg'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InternHub",
  description: "IINTM Placement cell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <Head>
        <link rel="shortcut icon" href={Logo} type="image/svg+xml" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
