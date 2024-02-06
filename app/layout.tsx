"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Link from "next/link";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();

	const onClickUrl = (url: string) => {
		router.push(url);
	};
	return (
		<html lang="en">
			<Head />
			<body className={inter.className}>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link href="/calculator">Calculator</Link>
					</li>
					<li>
						<Link href="/settings">Setting</Link>
					</li>
				</ul>
				{children}
			</body>
		</html>
	);
}
