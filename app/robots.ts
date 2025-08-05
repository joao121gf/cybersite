import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/private/",
          "/api/",
          "/_next/",
          "/temp/",
          "/*.json$",
          "/*?*utm_*",
          "/*?*fbclid*",
          "/*?*gclid*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/private/"],
      },
    ],
    sitemap: "https://cybersite.com.br/sitemap.xml",
    host: "https://cybersite.com.br",
  }
}
