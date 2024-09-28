import localFont from "next/font/local";
import "./globals.css";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next Hero",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     
        <Navbar></Navbar>
      
        <div className="px-20">
    
        {children}
        </div>
      </body>
    </html>
  );
}
