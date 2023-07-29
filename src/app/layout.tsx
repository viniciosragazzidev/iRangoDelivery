import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthSessionProvider from "./_components/AuthSessionProvider";
import HeaderNavbar from "./_components/HeaderNavbar/HeaderNavbar";
import BottomNavbar from "./_components/BottomNavbar";
import LoadComponent from "./_components/LoadComponent";
import ReduxProvider from "./redux/reduxProvider";

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
    <ReduxProvider>
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
    </ReduxProvider>
  );
}
