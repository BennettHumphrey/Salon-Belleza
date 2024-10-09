import type { Metadata } from "next";
import "./globals.css";
import Nav from "./Components/Nav/Nav";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Salon Belleza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden scroll-smooth">
        <Nav />
        <Providers>
          <div className="relative top-20">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
