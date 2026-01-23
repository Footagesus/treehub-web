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
} from "lucide-react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

const features = [
    {
        Icon: Check,
        Title: "Universal Hub",
        Description:
            "A versatile platform designed to manage scripts, tools, and workflows seamlessly.",
    },
    {
        Icon: Search,
        Title: "Smart Search",
        Description:
            "Quickly find scripts, templates, and snippets using advanced filters.",
    },
    {
        Icon: Settings,
        Title: "Customizable UI",
        Description:
            "Tailor themes, layouts, and interface elements to your preferences.",
    },
    {
        Icon: Cpu,
        Title: "TreeGPT AI Assistant",
        Description:
            "Get AI-powered guidance and code suggestions through multiple APIs like ChatGPT, Claude, DeepSeek, and Gemini.",
    },
    {
        Icon: Database,
        Title: "Script Library",
        Description:
            "Organize your scripts into folders and collections for easy access.",
    },
    {
        Icon: Zap,
        Title: "Fast Execution",
        Description:
            "Instantly run scripts with optimized performance and minimal lag.",
    },
    {
        Icon: Star,
        Title: "Favorites & Collections",
        Description:
            "Bookmark scripts or group them into collections for quick retrieval.",
    },
    {
        Icon: Cpu,
        Title: "Advanced Tools",
        Description:
            "Utilize debugging, automation, and code formatting tools built-in.",
    },
];

export default function HomePage() {
    return (
        <main className="flex flex-1 flex-col justify-left items-center sm:px-[10%] lg:px-[20%] px-4">
            <section
                id="landing"
                className="flex flex-col flex-1 justify-center gap-2 w-full max-w-4xl items-center py-[38dvh] top-14 h-screen"
            >
                <AnimatedList
                    staggerDelay={150}
                    className="flex flex-col gap-2 items-center"
                >
                    <h1 className="text-4xl font-bold text-center hidden">
                        Tree Hub
                    </h1>

                    <p className="text-xl font-normal opacity-60 text-center hidden">
                        Universal script
                    </p>

                    <div className="w-full flex flex-col items-center hidden">
                        <div className="max-w-96 my-0! ">
                            <DynamicCodeBlock lang="luau" code={loadstring} />
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-2">
                        <Link href="/getting-started">
                            <Button
                                className="rounded-full hidden"
                                variant="default"
                            >
                                Getting Started
                            </Button>
                        </Link>
                        <Link href="/docs">
                            <Button
                                className="rounded-full"
                                variant="secondary"
                            >
                                Documentation
                            </Button>
                        </Link>
                    </div>
                </AnimatedList>
            </section>
            <section
                id="features"
                className="flex flex-col w-full my-48 px-4 py-[20dvh] gap-4 hidden"
            >
                <AnimatedList staggerDelay={80} className="flex flex-row">
                    <h2 className="text-xl font-medium">Features</h2>
                    <span></span>
                </AnimatedList>
                <AnimatedList
                    staggerDelay={80}
                    className="gap-2 grid grid-cols-1 md:grid-cols-2 "
                >
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex flex-row items-start justify-start w-full gap-4 bg-card border border-black/10 dark:border-0 px-4 py-3 rounded-xl h-full"
                        >
                            <feature.Icon className="mt-0.5 h-8 opacity-70" />
                            <div className="flex flex-col flex-1">
                                <h1 className="text-[16px] font-medium">
                                    {feature.Title}
                                </h1>
                                <p className="opacity-70 text-sm">
                                    {feature.Description}
                                </p>
                            </div>
                        </div>
                    ))}
                </AnimatedList>
            </section>
            <span className="my-8 opacity-80 text-sm">more soon...</span>
        </main>
    );
}
