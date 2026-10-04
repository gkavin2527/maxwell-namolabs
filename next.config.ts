import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maxwellinsurance.co.nz",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/legal-information",
        destination: "/disclosure-statement",
        permanent: true,
      },
      {
        source: "/legal-information/",
        destination: "/disclosure-statement",
        permanent: true,
      },
      {
        source: "/key-information-on-life-and-disability-insurance",
        destination: "/life-insurance",
        permanent: true,
      },
      {
        source: "/key-information-on-life-and-disability-insurance/",
        destination: "/life-insurance",
        permanent: true,
      },
      {
        source: "/maxwell-limo-services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/maxwell-limo-services/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
