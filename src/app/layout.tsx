import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { cn } from "@/lib/utils";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
});





export const metadata: Metadata = {
  title: "Rohan Islam | Frontend Engineer",
  description:
    "I'm Rohan Islam, a Frontend Engineer specializing in React, Next.js, TypeScript, and modern web technologies. I build responsive, user-friendly, and high-performance web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <SocialSidebar/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
