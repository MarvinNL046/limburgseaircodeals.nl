import { MetadataRoute } from 'next'
import diensten from '@/data/diensten.json'
import { getCities } from '@/lib/cities'
import { blogPosts } from '@/data/blog-posts'
import brands from '@/data/brands.json'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://limburgseaircodeals.nl'
  const lastModified = new Date()

  // Static pages with custom priorities
  const staticPages = [
    { route: '', priority: 1.0 }, // Homepage
    { route: 'offerte', priority: 0.9 }, // High priority for conversion page
    { route: 'diensten', priority: 0.9 },
    { route: 'contact', priority: 0.8 },
    { route: 'over-ons', priority: 0.7 },
    { route: 'producten', priority: 0.7 }, // Added products page
    { route: 'faq', priority: 0.7 },
    { route: 'blog', priority: 0.6 },
    { route: 'kennisbank', priority: 0.6 },
    { route: 'merken', priority: 0.6 },
    { route: 'steden', priority: 0.8 },
    { route: 'privacy', priority: 0.4 }, // Added privacy page
    { route: 'voorwaarden', priority: 0.4 }, // Added terms page
    { route: 'sitemap', priority: 0.3 }, // Added sitemap page
  ].map((page) => ({
    url: `${siteUrl}/${page.route}`,
    lastModified,
    changeFrequency: page.route === '' ? 'daily' : 'weekly',
    priority: page.priority,
  })) as MetadataRoute.Sitemap

  // Get all cities
  const cities = await getCities()

  // Generate city URLs with dynamic priorities based on population and focus on Maastricht
  const cityUrls = cities.map((city) => ({
    url: `${siteUrl}/steden/${city.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: city.city.toLowerCase() === 'maastricht' ? 1.0 :
             city.population > 50000 ? 0.8 : 
             city.population > 20000 ? 0.7 : 
             city.population > 10000 ? 0.6 : 0.5,
  }))

  // Generate service URLs with high priority
  const serviceUrls = diensten.map((dienst) => ({
    url: `${siteUrl}/diensten/${dienst.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Generate blog URLs with dynamic priority based on date
  const blogUrls = blogPosts.map((post) => {
    const postDate = new Date(post.date)
    const ageInDays = (Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24)
    
    return {
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency: 'monthly' as const,
      priority: ageInDays < 30 ? 0.8 :
               ageInDays < 90 ? 0.7 :
               0.6,
    }
  })

  // Generate brand URLs
  const brandUrls = brands.brands.map((brand) => ({
    url: `${siteUrl}/merken/${brand.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Generate kennisbank article URLs
  const kennisbankArticles = [
    'verwarmen-met-airco',
    'voordelen-airconditioning',
    'storingscode-gids',
    'veelvoorkomende-problemen',
    'soorten-airco',
    'onderhoud-tips',
    'scop-seer-waarden',
    'koudemiddelen',
    'klimaatbeheersing',
    'hoe-werkt-airco',
    'energiebesparing',
    'airco-luchtfilter-onderhoud',
    'airco-installatie-maastricht',
  ]

  const kennisbankUrls = kennisbankArticles.map((slug) => ({
    url: `${siteUrl}/kennisbank/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Generate service-city combination URLs with dynamic priorities and focus on Maastricht
  const serviceCityUrls = diensten.flatMap((dienst) =>
    cities.map((city) => ({
      url: `${siteUrl}/diensten/${dienst.slug}/${city.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: city.city.toLowerCase() === 'maastricht' ? 0.9 :
               city.population > 50000 ? 0.7 : 
               city.population > 20000 ? 0.6 : 
               0.5,
    }))
  )

  return [
    ...staticPages,
    ...cityUrls,
    ...serviceUrls,
    ...blogUrls,
    ...brandUrls,
    ...kennisbankUrls,
    ...serviceCityUrls,
  ]
}
