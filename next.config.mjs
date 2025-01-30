/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "cdn.builder.io",
      "awesome-vacation-43e64f345e.media.strapiapp.com",
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents embedding in any iframe
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';", // Also prevents embedding in frames
          },
        ],
      },
    ];
  },
};

export default nextConfig;
