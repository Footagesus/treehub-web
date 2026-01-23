import AnimatedList from "@/components/AnimatedList";
import loadstring from "@/lib/loadstring";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

export default function GettingStartedPage() {
    return (
        <main className="flex flex-1 flex-col items-center justify-center sm:px-[10%] lg:px-[20%] px-4 min-h-dvh">
            <AnimatedList
                className="flex flex-col items-center gap-2 justify-center"
                staggerDelay={150}
            >
                <h1 className="text-2xl font-semibold text-center">
                    Getting Started
                </h1>

                <p className="text-lg font-medium opacity-70 text-center">
                    Script
                </p>

                <div className="w-full flex flex-row items-center justify-center">
                    <div className="w-full max-w-96">
                        <DynamicCodeBlock lang="luau" code={loadstring} />
                    </div>
                </div>
            </AnimatedList>
        </main>
    );
}
