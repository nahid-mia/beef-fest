
import { Geist, Geist_Mono, Neuton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Beef Fest",
  icons: {
    icon: "https://i.ibb.co.com/XQDQKHW/istockphoto-1267561350-612x612.jpg",
  },
  description: "Best Qurbani Helper, Best Cows in Town, Best Cows for Delivery",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="nord"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col`}>
        <Navbar></Navbar>
        <main className="grow">
          {children}
        </main>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
