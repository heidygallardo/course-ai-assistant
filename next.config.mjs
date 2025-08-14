/** @type {import('next').NextConfig} */
const nextConfig = { experimental: {
    // load only modules that are in use
    optimizePackageImports: ["@chakra-ui/react"],
  },};

export default nextConfig;
