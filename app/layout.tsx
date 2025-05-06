import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIO",
  description: "Save Your Day!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
