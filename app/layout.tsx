import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "For Educaational purposes only",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >

        <body className="bg-white  dark:bg-[#1A1C29] ">
          <Header />
          {children}
        </body>

      </ThemeProvider>
    </html>
  );
}
