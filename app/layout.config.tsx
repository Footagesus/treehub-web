import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export interface NavLink {
    text: string;
    url: string;
    active?: string;
}

export const baseOptions: BaseLayoutProps & { links: NavLink[] } = {
    nav: {
        title: (
            <div className="flex flex-row items-center gap-1">
                <img src="/logo.svg" className="h-4 dark:invert" />
                <span className="font-semibold text-[20px] max-sm:hidden">
                    Tree Hub
                </span>
            </div>
        ),
    },
    links: [
        { text: "Documentation", url: "/docs", active: "nested-url" },
        { text: "Getting Started", url: "/getting-started" },
    ],
};
