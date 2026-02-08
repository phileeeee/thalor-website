import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Thalor | Independent Project Management for Property Development",
  description:
    "Thalor is a Sydney-based independent project management firm delivering end-to-end services for property development — from planning and approvals through to construction delivery and handover.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/favicon.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
