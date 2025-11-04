import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import './globals.css';
import Navbar from "@/components/Navbar";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: "TripNestBnB",
  description: "Nest For Your Trips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />

        <div className="pt-32">
          {children}
        </div>
        <LoginModal />
        <SignupModal />
      </body>
    </html>
  );
}
