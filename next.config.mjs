/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos",
          outputPath: "static/videos",
          name: "[name].[hash].[ext]",
        },
      },
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
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
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.upworkdeveloper.com",
        port: "5534",
        pathname: "/public/uploads/profile_pictures/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/public/uploads/profile_pictures/**",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
