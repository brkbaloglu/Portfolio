import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBubble from "@/components/ContactBubble";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Burak Baloglu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
        <ContactBubble></ContactBubble>
      </body>
    </html>
  );
}
