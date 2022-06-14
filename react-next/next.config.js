/** @type {import('next').NextConfig} */

const API_KEY = "593636943de983fdf0df44781daa2273";

const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source:"/contact",
        destination:"/form",
        permanent:false
      }
    ];
  },
  async rewrites() {
    return [
      {
        source:"/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`
      },
      {
        source:"/api/movies/:id",
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=ko&page=1`
      }
    ];
  }
}

module.exports = nextConfig
