/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // تحسين الأداء
  compress: true,
  poweredByHeader: false,
  
  // تحسين الصور
  images: {
    domains: [
      'res.cloudinary.com',
      'hmcar.okigo.net',
      'car-auction-sand.vercel.app',
      'client-app-iota-eight.vercel.app',
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Code Splitting و Bundle Optimization
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
    ],
  },

  // Webpack Configuration
  webpack: (config, { dev, isServer }) => {
    // تحسين Bundle Size
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
            // React chunk
            react: {
              name: 'react',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 30,
            },
            // UI Libraries chunk
            ui: {
              name: 'ui',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](framer-motion|lucide-react|@radix-ui)[\\/]/,
              priority: 25,
            },
          },
        },
      };
    }

    return config;
  },

  // Headers للأمان والأداء
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/car/:id',
        destination: '/cars/:id',
        permanent: true,
      },
      {
        source: '/part/:id',
        destination: '/parts/:id',
        permanent: true,
      },
    ];
  },

  // Environment Variables
  env: {
    NEXT_PUBLIC_APP_NAME: 'HM CAR',
    NEXT_PUBLIC_APP_URL: 'https://hmcar.okigo.net',
  },

  // Output
  output: 'standalone',
  
  // Trailing Slash
  trailingSlash: false,
  
  // Skip Trailing Slash Redirect
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
