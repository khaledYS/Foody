import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { cn } from "@/lib/utils"
import Navbar from "./_components/Navbar";
import ClientLayout from "./_components/ClientLayout.js";

const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: '400'
})

export const metadata = {
  title: "Foody",
  description: "Foody is an open-source project providing comprehensive services for restaurants. Features include a menu maker with QR code integration, virtual menu and ordering, reservation management, customer feedback system, employee scheduling, and table management. Enhance your restaurant's efficiency with Foody!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
          "min-h-screen bg-background overflow-x-hidden antialiased scroll-smooth",
          poppinsFont.className
        )}>
        <ClientLayout />
        {children}
      </body>
    </html>
  );
}
