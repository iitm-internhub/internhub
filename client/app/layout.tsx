import type { Metadata } from "next";
import { Inter, Poppins, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "@/components/context/theme-provider";
import Logo from "@/public/icons/InternhubLogo.svg";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});
const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/components/context/auth";

export const metadata: Metadata = {
  title: "InternHub",
  description: "IINTM Placement cell",
  icons: Logo,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Toaster />
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
