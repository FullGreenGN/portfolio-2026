import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: "standalone",
  experimental: {
    mdxRs: true,
  },
  reactCompiler: true
};

export default nextConfig;
