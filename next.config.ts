import type { Configuration } from "webpack";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "embla-carousel-react",
      "lucide-react",
    ],
  },

  compress: true,
  poweredByHeader: false,

  turbopack: {},

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vqyyxwtacovdqzhsdafi.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
 
    ],
  },

  webpack(config: Configuration, { dev }: { dev: boolean }) {
    if (!dev) {
      config.optimization!.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          animations: {
            test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
            name: "animations",
            chunks: "async",
          },
        },
      };
    }

    const fileLoaderRule = config.module!.rules!.find((rule: any) =>
      (rule as any).test?.test?.(".svg"),
    );

    config.module!.rules!.push(
      {
        ...(fileLoaderRule as any),
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: (fileLoaderRule as any).issuer,
        resourceQuery: {
          not: [...((fileLoaderRule as any).resourceQuery?.not || []), /url/],
        },
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
          },
        },
      },
    );

    (fileLoaderRule as any).exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
