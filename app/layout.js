import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zager",
  description: "Zager Digital Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-brand text-white`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
