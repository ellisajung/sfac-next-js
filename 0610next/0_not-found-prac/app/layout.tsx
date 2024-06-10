import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: {"Next.JS 14 | Sucoding"},
  description: "Let's learn next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>root header</h1> */}
        {children}
        {/* <h1>root footer</h1> */}
        <div>
          <Link href="/login" className="underline text-blue-500">
            login
          </Link>
          <Link href="/register" className="underline text-blue-500">
            register
          </Link>
          <Link href="/password" className="underline text-blue-500">
            password
          </Link>
          <Link href="/blog" className="underline text-blue-500">
            blog
          </Link>
          <Link href="/blog/1" className="underline text-blue-500">
            blog 1
          </Link>
          <Link href="/blog/2" className="underline text-blue-500">
            blog 2
          </Link>
          <Link href="/blog/read" className="underline text-blue-500">
            blog read
          </Link>
        </div>
      </body>
    </html>
  );
}
