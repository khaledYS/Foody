import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
<<<<<<< HEAD

import { ThemeProvider } from "next-themes";
=======
>>>>>>> parent of e6660d7 (Calling some elements from the shadcn library instead of manually writing them)
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "Foody",
  description:
    "Foody is an open-source project providing comprehensive services for restaurants. Features include a menu maker with QR code integration, virtual menu and ordering, reservation management, customer feedback system, employee scheduling, and table management. Enhance your restaurant's efficiency with Foody!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          poppinsFont.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
