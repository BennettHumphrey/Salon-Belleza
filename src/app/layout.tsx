import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Nav from "./Components/Nav/Nav";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Salon Belleza",
  description: "Discover the finest hair and beauty services at Salon Belleza...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/header-hair.webp"
          as="image"
          type="image/webp"
        />
      </Head>
      <body className="overflow-x-hidden scroll-smooth">
        <Nav />
        <Providers>
          <div className="relative top-20">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
