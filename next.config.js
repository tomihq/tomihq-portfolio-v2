/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["es"],
    defaultLocale: "es"
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
