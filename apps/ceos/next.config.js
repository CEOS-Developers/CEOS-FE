/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  transpilePackages: ['@ceos-fe/ui', '@ceos-fe/utils'],
  compiler: {
    emotion: true,
  },
  images: {
    domains: [
      'ceos-bucket-20.s3.ap-northeast-2.amazonaws.com',
      'ceos-storage-dev.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  async redirects() {
    return [
      // {
      //   source: '/recruit/apply',
      //   destination: '/',
      //   permanent: false,
      // },
      {
        source: '/recruit/docpass',
        destination: '/',
        permanent: false,
      },
      {
        source: '/recruit/finpass',
        destination: '/',
        permanent: false,
      },
      {
        source: '/recruit/nonpass',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
