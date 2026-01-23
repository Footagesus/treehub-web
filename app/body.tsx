"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import type { ReactNode } from "react";

export function Body({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const isDocs = pathname.startsWith("/docs");

    return (
        <body
            className={clsx(
                "flex flex-col min-h-svh bg-neutral-100",
                isDocs ? "dark:bg-neutral-900" : "dark:bg-neutral-950"
            )}
        >
            {children}
        </body>
    );
}
