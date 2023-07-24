import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthSessionProvider from "./components/AuthSessionProvider";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import BottomNavbar from "./components/BottomNavbar";
import LoadComponent from "./components/LoadComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IRango Delivery",
  description: "IRango Delivery o lugar onde os melhores estão",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthSessionProvider>
      <html lang="ptBR">
        <body className={inter.className}>
          <LoadComponent />
          <HeaderNavbar />
          {children}
          <BottomNavbar />
        </body>
      </html>
    </AuthSessionProvider>
  );
}
