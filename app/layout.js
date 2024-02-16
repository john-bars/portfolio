import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Bars Quipia",
  description:
    "Hi! I'm John Bars, a frontend developer specializing in React and Next.js.",
  image:
    "https://john-bars.vercel.app/_next/image?url=%2Fimages%2Fportfolio-mobile.png&w=384&q=75",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
