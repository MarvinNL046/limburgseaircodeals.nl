/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  env: {
    // Use the environment variable or fallback to the new domain
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://limburgseaircodeals.nl'
  },
  async redirects() {
    return [
      // Redirect common misspellings and old URLs
      {
        source: '/merken/mitsubishi',
        destination: '/merken/mitsubishi-electric',
        permanent: true,
      },
      {
        source: '/diensten/airco-installatie',
        destination: '/diensten/installatie',
        permanent: true,
      },
      {
        source: '/diensten/airco-onderhoud',
        destination: '/diensten/onderhoud',
        permanent: true,
      },
      {
        source: '/diensten/airco-reparatie',
        destination: '/diensten/reparatie',
        permanent: true,
      },
      {
        source: '/diensten/airco-lease',
        destination: '/diensten',
        permanent: true,
      },
      {
        source: '/airco-installatie-brunssum',
        destination: '/steden/brunssum',
        permanent: true,
      },
      {
        source: '/airco-installatie-:city',
        destination: '/steden/:city',
        permanent: true,
      },
      // Common alternative spellings
      {
        source: '/products',
        destination: '/producten',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/diensten',
        permanent: true,
      },
      {
        source: '/brands',
        destination: '/merken',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/over-ons',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/over-ons',
        permanent: true,
      },
      {
        source: '/quote',
        destination: '/offerte',
        permanent: true,
      },
      // Old domain redirects
      {
        source: '/aircoinstallatiebrunssum',
        destination: '/',
        permanent: true,
      },
      {
        source: '/staycoolairco',
        destination: '/',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
