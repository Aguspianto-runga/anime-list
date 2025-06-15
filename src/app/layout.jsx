import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'

const gabarito = Gabarito({
  variable: "--font-Gabarito",
  subsets: ["latin"],
  weight: ["400","700"], // 400 untuk normal, 700 untuk tebal
});

export const metadata = {
  title: "Anime List",
  description: "Website Anime Idonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-cursorstyle="true" data-effect-ective="true">
      <body className={`${gabarito.variable} antialiased bg-[#222831]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
