/** @type {import('next').NextConfig} */
const path = require('path')
const withNextIntl = require('next-intl/plugin')();

const nextConfig = withNextIntl({
  eslint: {
    dirs: ["src"],
  },
  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: "@svgr/webpack",
        options: {
          dimensions: false,
          titleProp: true,
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  i18n: {
    locales: ['en-US', 'ar'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'baraka.com',
        defaultLocale: 'en-Us'
      },
      {
        domain: 'ar.baraka.com',
        defaultLocale: 'ar',
        http: true
      }
    ]
  }
});

module.exports = nextConfig;
