import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata = {
  title: "Dentihear",
  description: "Panduan Perawatan Gigi Anak Berkebutuhan Khusus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
