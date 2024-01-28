import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Bars | Portfolio",
  description: "A portfolio made using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </body>
    </html>
  );
}
