/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: ["assets", "components", "contexts", "hooks", "pages", "util"],
  },
};

module.exports = nextConfig;
