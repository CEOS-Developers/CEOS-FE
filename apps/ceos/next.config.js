// @ceos-fe/ui, @ceos-fe/utils 패키지를 tranpile 시킨다.
const withTM = require('next-transpile-modules')([
  '@ceos-fe/ui',
  '@ceos-fe/utils',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/recruit/apply',
        destination: '/',
        permanent: false,
      },
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

module.exports = withTM(nextConfig);
