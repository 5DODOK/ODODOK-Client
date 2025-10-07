import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/nprogress.css";
import Header from "@/components/layout/Header";
import QueryProvider from "./QueryProvider";
import ProgressBar from "@/components/ProgressBar";

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
        <ProgressBar />
        <Header />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
