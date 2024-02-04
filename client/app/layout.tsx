import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/components/context/theme-provider";
import Logo from '@/public/icons/InternhubLogo.svg'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InternHub",
  description: "IINTM Placement cell",
  icons: Logo
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
