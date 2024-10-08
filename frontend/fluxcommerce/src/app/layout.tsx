import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from 'next/image';
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <div className="top">
            <Image src="/Logo1.png" alt="" width={300} height={300} />
            <form>
              <input type="text" placeholder="Search for products, brands and much more..." />
              <button>
                <Image src="/lupa.png" alt="" width={30} height={30}  />
              </button>
            </form>
            <div className="Auth">Authentication</div>
          </div>
          <div className="down">
            <div className="LeftLinks">
              <a href="#">Categories</a>
              <a href="#">Daily Offers</a>
              <a href="#">Download App</a>
              <a href="#">Contact</a>
              <a href="#">Sell</a>
            </div>
            <div className="RightLinks">
              <a href="#">Create Account</a>
              <a href="#">Login</a>
              <a href="#"><Image src="/cart.png" alt="" height={30} width={30} /></a>
            </div>
          </div>
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
