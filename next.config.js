/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/en/product/',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
