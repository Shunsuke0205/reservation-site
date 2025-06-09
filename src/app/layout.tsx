import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "理髪店BARBER STUDIO",
  description: "理髪店BARBER STUDIO",
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
