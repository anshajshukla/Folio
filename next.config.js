/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensure the app builds correctly with proper 404 handling
  trailingSlash: true,
  // Prevent symlink issues
  skipTrailingSlashRedirect: true,
  // Avoid symbolic links in the output directory
  experimental: {
    outputFileTracingExcludes: {
      '*': ['node_modules/**/*']
    },
  },
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
