import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: "standalone",
  experimental: {
    mdxRs: true,
  },
  reactCompiler: true,
  turbopack: {},
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);
