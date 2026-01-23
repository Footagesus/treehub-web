import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();
const isGithubPages = process.env.NODE_ENV === "production";
const repo = "WindUI-Docs";

/** @type {import('next').NextConfig} */
const config = {
    output: "export",
    basePath: isGithubPages ? `/${repo}` : "",
    assetPrefix: isGithubPages ? `/${repo}/` : "",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default withMDX(config);
