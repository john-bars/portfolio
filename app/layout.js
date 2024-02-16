import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
    title: "John Bars Quipia",
    description:
      "Hi! I'm John Bars, a frontend developer specializing in React and Next.js.",
    Images: {
      url: "https://john-bars.vercel.app/_next/image?url=%2Fimages%2Fjohn-bars-portfolio.png&w=384&q=75",
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
