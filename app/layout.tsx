import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./global.css";
import { Body } from "./body";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://footagesus.github.io/treehub-web"),
    title: {
        template: "%s",
        default: "The Universal Roblox Script",
    },
    description:
        "The official documentation for Treehub, a universal script for Roblox.",
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <Body>
                <RootProvider search={{ enabled: false }}>
                    {children}
                </RootProvider>
            </Body>
        </html>
    );
}
