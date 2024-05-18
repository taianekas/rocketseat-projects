import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ['400', '700'], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
