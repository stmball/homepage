import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "stmball",
  description: "Portfolio of Dr. Samuel Ball - Lecturer of Health Data Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-gradient-to-bl from-gray-950 to-slate-950">
        <div className="fixed inset-0 bg-pattern opacity-5 pointer-events-none -z-10"></div>
        {children}
      </body>
    </html>
  );
}
