
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://limburgseaircodeals.nl",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
    ],
    additionalSitemaps: [
      "https://limburgseaircodeals.nl/sitemap-locations.xml",
      "https://limburgseaircodeals.nl/sitemap-services.xml",
    ],
  },
  exclude: ['/404', '/500', '/offline'],
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
}
