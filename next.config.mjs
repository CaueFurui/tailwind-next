/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['pt-BR', 'en-US', 'es-ES'],
    defaultLocale: 'pt-BR',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/cauefurui.png',
      },
    ],
  },
}

export default nextConfig
