import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thalor | Independent Project Management for Property Development",
  description:
    "Thalor is a Sydney-based independent project management firm delivering end-to-end services for property development — from planning and approvals through to construction delivery and handover.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
