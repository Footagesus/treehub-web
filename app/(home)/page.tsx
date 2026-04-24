"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedList from "@/components/AnimatedList";
import loadstring from "@/lib/loadstring";

import {
    Check,
    Search,
    Cpu,
    Settings,
    Zap,
    Database,
    Star,
    ChevronRight,
    ExternalLink,
    BookOpen,
    Moon,
} from "lucide-react";

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Marquee } from "@/components/Marquee";
import aboutTH from "../data/about.treehub";
import aboutTH2 from "../data/about.treehub.2";
import Logo from "@/components/Logo";
import BrandName from "../data/BrandName";
import { useEffect, useState } from "react";
import TopbarButton from "@/components/TopbarButton";
import { useRouter } from "next/navigation";
import DiscordLogo from "@/components/DiscordLogo";

export default function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 20);
    }, []);
    1;
    return (
        <main className="flex flex-1 flex-col justify-left items-center p-0 overflow-x-clip bg-black">
            {/* temp hidden */}
            <section
                id="landing"
                className="hidden! flex flex-col flex-1 justify-center gap-2 w-full px-4 lg:px-24 items-start lg:pt-[32dvh] pt-[26dvh] pb-[40dvh] h-[100vh]! relative"
            >
                {/* Hidden */}
                <div className="absolute! right-6 lg:right-24 w-78! h-[364px] flex flex-row items-center justify-center top-[32dvh] hidden">
                    <Logo className="opacity-8 lg:opacity-30 relative w-full! h-full! " />

                    <div className="absolute w-full! h-full! opacity-7 lg:opacity-14">
                        {/* Rotated */}
                        <span
                            className="bg-foreground w-800! h-0.5! left-[50%] transform -translate-x-1/2 absolute top-6"
                            style={{ rotate: "-26.666deg" }}
                        ></span>
                        <span
                            className="bg-foreground w-800! h-0.5! left-[50%] transform -translate-x-1/2 absolute top-19"
                            style={{ rotate: "-26.6deg" }}
                        ></span>
                        <span
                            className="bg-foreground w-800! h-0.5! left-[50%] transform -translate-x-1/2 absolute top-57"
                            style={{ rotate: "-26.6deg" }}
                        ></span>
                        <span
                            className="bg-foreground w-800! h-0.5! left-[50%] transform -translate-x-1/2 absolute top-70"
                            style={{ rotate: "-26.6deg" }}
                        ></span>
                        <span
                            className="bg-foreground w-800! h-0.5! left-[50%] transform -translate-x-1/2 absolute top-76"
                            style={{ rotate: "-26.6deg" }}
                        ></span>
                        <span
                            className="bg-foreground w-800! h-0.5! left-[50%] transform -translate-x-1/2 absolute top-83"
                            style={{ rotate: "-26.6deg" }}
                        ></span>

                        {/* Vertical */}
                        <span className="bg-foreground h-800! w-0.5! -top-[50%] transform -translate-y-1/2 absolute left-0"></span>
                        <span className="bg-foreground h-800! w-0.5! -top-[50%] transform -translate-y-1/2 absolute left-27.5"></span>
                        <span className="bg-foreground h-800! w-0.5! -top-[50%] transform -translate-y-1/2 absolute left-33"></span>
                        <span className="bg-foreground h-800! w-0.5! -top-[50%] transform -translate-y-1/2 absolute left-38.75"></span>
                        <span className="bg-foreground h-800! w-0.5! -top-[50%] transform -translate-y-1/2 absolute left-51.5"></span>
                        <span className="bg-foreground h-800! w-0.5! -top-[50%] transform -translate-y-1/2 absolute left-77.5"></span>
                    </div>
                </div>

                <AnimatedList
                    staggerDelay={100}
                    className="flex flex-col gap-7 items-start relative w-fit!"
                >
                    <TopbarButton
                        onClick={() => router.push("/blog/")}
                        isScrolled={true}
                        className="w-fit!"
                        scaleOnHold={1.1}
                        brightnessOnHold={140}
                    >
                        <div className="flex flex-row items-center font-normal text-xl text-foreground/95 rounded-full gap-2 w-fit! tracking-tight dark:bg-foreground/14 bg-foreground/8 dark:hover:bg-foreground/18 hover:bg-foreground/10 px-3 py-0.5 brightness-140 cursor-pointer">
                            Branchy is released! (nope)
                            <ChevronRight className="size-6 -mr-2 " />
                        </div>
                    </TopbarButton>

                    <p className="text-left text-[48px] lg:text-[64px] max-sm:text-[48px] font-normal tracking-tighter dark:text-[#f9f9ff] text-base/14 lg:text-base/16 max-sm:text-base/14">
                        Discover new <br /> universal script
                    </p>

                    <div className="flex flex-col sm:flex-row items-start justify-start gap-2 z-9999999!">
                        <Link href="/getting-started" className="h-full">
                            <Button
                                className="rounded-full text-[20px] font-medium tracking-tight h-full px-5! backdrop-blur-lg! bg-brand! text-white hover:brightness-120!"
                                variant="default"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5! h-5! -ml-1"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M7.25 8A.75.75 0 0 1 8 7.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 15.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Get script
                            </Button>
                        </Link>
                        <Link href="/docs" className="h-full">
                            <Button
                                className="rounded-full text-[20px] font-medium tracking-tight h-full px-5! dark:bg-[#EFEFFF]/20 bg-[#000010]/48 hover:bg-[#000010]/60 dark:hover:bg-[#EFEFFF]/32 text-white backdrop-blur-lg!"
                                variant="secondary"
                            >
                                Documentation
                            </Button>
                        </Link>
                        <Link
                            href="https://github.com/Footagesus/treehub"
                            className="h-full"
                        >
                            <Button
                                className="rounded-full text-[20px] font-medium tracking-tight h-full px-5! bg-black/8 dark:bg-white/8 hover:bg-black/12 dark:hover:bg-white/12 backdrop-blur-lg!"
                                variant="secondary"
                            >
                                GitHub
                            </Button>
                        </Link>
                    </div>
                </AnimatedList>

                <img
                    src="/treehub/banners/Screen.png"
                    alt=""
                    className={`absolute lg:left-170 w-[calc(100%-170*4px-24*4px)] ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"} transition-opacity duration-1300 ease-out delay-200 max-xl:hidden z-999999 shadow-black/40 shadow-2xl rounded-[16px]`}
                />

                <span className="bg-gradient-to-b from-background/0 to-background absolute bottom-0 z-999 w-full h-80 pointer-events-none left-0"></span>
            </section>

            <section className="hidden! px-4 lg:px-24 z-999999 bg-background lg:hidden">
                <AnimatedList staggerDelay={0} className="">
                    <img src="/treehub/banners/Screen.png" alt="" />
                    <div></div>
                </AnimatedList>
            </section>

            <section className="hidden! pt-80 w-screen bg-background z-9999999">
                <p className="inline-block text-5xl w-full text-center font-medium tracking-tighter pb-18">
                    What is the {""}
                    <span
                        className="bg-gradient-to-r from-[#30FF6A] to-[#30F5FF] font-medium
      bg-clip-text text-transparent"
                    >
                        {BrandName}
                    </span>
                    ?
                </p>

                <div className="space-y-2 w-full">
                    <Marquee speed={50} gap={2}>
                        <div className="flex flex-row items-center gap-2">
                            {aboutTH().map((info, index) => (
                                <p
                                    key={index}
                                    className="text-lg font-medium opacity-80 tracking-tight dark:bg-[#EEEEFF]/12 bg-black/6 px-4.5 py-2 rounded-full"
                                >
                                    {info.title}
                                </p>
                            ))}
                        </div>
                    </Marquee>
                    <Marquee speed={50} gap={2} reverse={true}>
                        <div className="flex flex-row items-center gap-2">
                            {aboutTH2().map((info, index) => (
                                <p
                                    key={index}
                                    className="text-lg font-medium opacity-80 tracking-tight dark:bg-[#EEEEFF]/12 bg-black/6 px-4.5 py-2 rounded-full"
                                >
                                    {info.title}
                                </p>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </section>

            <footer className="hidden!  mt-40 w-full">
                <div className="flex flex-row justify-between items-start py-12 px-3 lg:px-24 w-full gap-24 bg-accent/50">
                    <div className="flex flex-col w-fit! gap-2">
                        <div className="flex flex-row items-center gap-1 w-fit!">
                            <Logo className="h-5! text-brand" />
                            <span className="font-semibold text-[22px] tracking-tighter">
                                {BrandName}
                            </span>
                        </div>

                        <p className="text-sm opacity-80 mt-2 tracking-tight font-medium">
                            © {new Date().getFullYear()} {BrandName}. All rights
                            reserved.
                        </p>

                        <div className="flex flex-row items-center">
                            <TopbarButton
                                onClick={() =>
                                    router.push(
                                        "https://discord.gg/ftgs-development-hub-1300692552005189632",
                                    )
                                }
                                isScrolled={true}
                                className="w-fit!"
                                scaleOnHold={1.3}
                                brightnessOnHold={180}
                            >
                                <div className="flex flex-row aspect-square rounded-full p-2 bg-foreground/10 items-center justify-center w-10! h-10!">
                                    <DiscordLogo className="h-4! opacity-80" />
                                </div>
                            </TopbarButton>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between flex-1 w-full gap-12">
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-lg font-medium pb-3 tracking-tight">
                                Links
                            </p>
                            <Link
                                href="/getting-started"
                                className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity tracking-tight"
                            >
                                Get script
                            </Link>
                            <Link
                                href="/docs"
                                className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity tracking-tight"
                            >
                                Documentation
                            </Link>
                            <Link
                                href="/blog/"
                                className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity tracking-tight"
                            >
                                Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

            <section className="h-[100dvh]! flex flex-col items-center justify-center gap-5">
                <AnimatedList
                    staggerDelay={100}
                    className="flex flex-col items-center justify-center gap-5"
                >
                    <p className="text-2xl font-medium tracking-tighter">
                        Something interesting is coming...
                    </p>
                    <Button
                        className="rounded-full bg-brand! text-white! font-medium tracking-tight"
                        onClick={() =>
                            router.push(
                                `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/docs/`,
                            )
                        }
                    >
                        Documentation
                    </Button>
                </AnimatedList>
            </section>
        </main>
    );
}
