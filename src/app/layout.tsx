import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShoppingCartContextProvider from "@/context/ShoppingCartContext";

export const metadata: Metadata = {
  title: "commerceWebsite",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ShoppingCartContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ShoppingCartContextProvider>
      </body>
    </html>
  );
}
