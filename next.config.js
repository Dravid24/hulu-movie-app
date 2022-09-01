/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["press.hulu.com", "image.tmdb.org"],
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/?genre=fetchTrending",
  //       permanent: false,
  //     },
  //   ];
  // },
  env: {
    apiKey: "03f8fa8d070a6f47e11781ff54fc3807",
  },
};

module.exports = nextConfig;
