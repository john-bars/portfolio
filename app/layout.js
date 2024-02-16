import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
    title: "John Bars Quipia",
    description:
      "Hi! I'm John Bars, a frontend developer specializing in React and Next.js.",
    Image: {
      url: "",
      width: 1159,
      height: 820,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
