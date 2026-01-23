"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavbarProps {
    links: any[];
}

export default function Navbar({ links }: NavbarProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 50);
    }, []);

    const filteredLinks = links.filter(
        (link) => link.url !== "/getting-started",
    );

    useEffect(() => {
        const getSaved = () => localStorage.getItem("theme");
        const prefersDark = () =>
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;

        const shouldBeDark =
            getSaved() === "dark" || (getSaved() === null && prefersDark());
        document.documentElement.classList.toggle("dark", shouldBeDark);
        setIsDark(shouldBeDark);

        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const mqHandler = (e: MediaQueryListEvent) => {
            if (getSaved() !== null) return;
            document.documentElement.classList.toggle("dark", e.matches);
            setIsDark(e.matches);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        mq.addEventListener("change", mqHandler);
        window.addEventListener("scroll", handleScroll);

        return () => {
            timeoutsRef.current.forEach((t) => clearTimeout(t));
            mq.removeEventListener("change", mqHandler);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
        setIsDark(newTheme === "dark");
    };

    return (
        <nav
            className={`flex fixed top-0 w-full z-50 overflow-hidden backdrop-blur-lg transition-colors duration-300 ${
                isScrolled ? "dark:bg-white/5 bg-white" : "bg-transparent"
            } ${isLoaded ? "h-14" : "h-0"}`}
            style={{
                transition:
                    "height 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease",
            }}
        >
            <div className="w-full h-14 sm:px-[10%] lg:px-[20%] px-4 flex flex-row items-center justify-between">
                <div
                    className={`flex flex-row items-center gap-1 transition-transform duration-900 ${
                        isLoaded
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 -translate-y-10 scale-80"
                    }`}
                    style={{
                        transitionTimingFunction:
                            "cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                >
                    <Link href="/" className="flex flex-row items-center gap-1">
                        <Logo className="h-4 w-[18.668px]" />
                        <span className="font-semibold text-[20px] max-sm:hidden">
                            Tree Hub
                        </span>
                    </Link>
                </div>

                <div className="flex items-center gap-4 justify-end">
                    {filteredLinks.map((link, idx) => (
                        <a
                            key={link.url}
                            href={link.url}
                            className={`dark:text-white/75 text-black hover:text-white/85 transition-transform duration-900 text-sm font-normal ${
                                isLoaded
                                    ? "opacity-100 translate-y-0 scale-100"
                                    : "opacity-0 -translate-y-10 scale-80"
                            }`}
                            style={{
                                transitionDelay: `${(idx + 1) * 100}ms`,
                                transitionTimingFunction:
                                    "cubic-bezier(0.34, 1.56, 0.64, 1)",
                            }}
                        >
                            {link.text}
                        </a>
                    ))}
                    <Link
                        href="/getting-started"
                        className={`transition-transform duration-900 ${
                            isLoaded
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 -translate-y-10 scale-80"
                        }`}
                        style={{
                            transitionDelay: `${(filteredLinks.length + 1) * 100}ms`,
                            transitionTimingFunction:
                                "cubic-bezier(0.34, 1.56, 0.64, 1)",
                        }}
                    >
                        <Button
                            className="rounded-full hidden"
                            variant="default"
                            size="xs"
                        >
                            Getting started
                        </Button>
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className={`transition-transform duration-900 ${
                            isLoaded
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 -translate-y-10 scale-80"
                        }`}
                        style={{
                            transitionDelay: `${(filteredLinks.length + 2) * 100}ms`,
                            transitionTimingFunction:
                                "cubic-bezier(0.34, 1.56, 0.64, 1)",
                        }}
                    >
                        <svg
                            className="h-5 opacity-35 hover:opacity-100 transition cursor-pointer"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className={isDark ? "" : "hidden"}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                stroke="currentColor"
                                strokeWidth="2.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                className={isDark ? "hidden" : ""}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                stroke="currentColor"
                                strokeWidth="2.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
