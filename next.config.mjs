/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Target .svg files
      use: ["@svgr/webpack"], // Use svgr/webpack loader
    });

    return config;
  },
};

export default nextConfig;
