import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeSwitcher } from "./components/ThemeSwitch";
import Hero from "./components/Hero";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Incredible Slime Database *ISDB*",
  description: "One stop for everything slime.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeSwitcher />
          <Hero />
          {children}
        </Providers>
      </body>
    </html>
  );
}
