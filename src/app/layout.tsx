import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import QueryProvider from "./QueryProvider";

export const metadata: Metadata = {
  title: "BumaView",
  description: "BumaView",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
