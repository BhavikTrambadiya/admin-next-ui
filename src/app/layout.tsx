import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Admin | Bhavik Trambadiya",
    description: "Admin Panel Component Collection In Tailwind Css and React with Next js Framework"
};

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={clsx("bg-gray-100 dark:bg-gray-900", inter.className)}>{children}</body>
        </html>
    );
}
