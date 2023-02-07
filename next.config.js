/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function() {
    return {
      "/locales/de-DE/summer-dress-f": {
        page: "/category/[name]/",
        // query: { locale: "de-DE", slug: "summer-dress-f" }
      } 
    };
  },
  experimental: {
    appDir: true,
  }, 
  images: {
    domains: ["fakestoreapi.com"]
  } 
}

module.exports = nextConfig
