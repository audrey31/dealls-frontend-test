import "./globals.css";
import { Inter } from "next/font/google";

import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Dealls Frontend Test",
  description: "Dashboard Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
