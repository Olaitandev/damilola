// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    sitemap: "https://www.damifayanjuola.com/sitemap.xml",
    host: "https://www.damifayanjuola.com",
  };
}
