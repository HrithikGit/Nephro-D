import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nephro D Tech - Professional Dialysis Services",
  description: "Leading provider of center-based and mobile dialysis services, committed to exceptional patient care and comfort.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
