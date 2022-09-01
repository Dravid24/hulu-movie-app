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
};

module.exports = nextConfig;
