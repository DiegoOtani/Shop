import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "E-commerce aplication developed by Diego Otani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
