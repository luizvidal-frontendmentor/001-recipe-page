import type { Metadata } from "next";
import { Outfit, Young_Serif } from "next/font/google";
import React from "react";
import "./globals.css";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	weight: ["400", "600", "700"],
});

const youngSerif = Young_Serif({
	variable: "--font-young",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Frontend Mentor | Recipe page",
	description: "Frontend Mentor Challenge",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${outfit.variable} ${youngSerif.variable} antialiased`}>
				{children}
				
			</body>
		</html>
	);
}
