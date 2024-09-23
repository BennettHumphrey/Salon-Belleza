import type { Metadata } from "next";
import "./globals.css";
import Nav from "./Components/Nav/Nav";


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
      <body>
        <Nav  />
        {children}
      </body>
    </html>
  );
}
