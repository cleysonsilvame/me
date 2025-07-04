import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://raw.githubusercontent.com/**')],
  },
}
const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
