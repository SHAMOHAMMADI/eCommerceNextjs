// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "localhost",

//       }
//     ],
//   },
// };

// export default nextConfig;

// next.config.js
module.exports = {
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "fakestoreapi.com",
      "letsenhance.io",
    ],
  },eslint: {
    ignoreDuringBuilds: true,
  },
};
