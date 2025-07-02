// @ceos-fe/ui, @ceos-fe/utils 패키지를 tranpile 시킨다.
const withTM = require('next-transpile-modules')([
  '@ceos-fe/ui',
  '@ceos-fe/utils',
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'ceos-bucket-20.s3.ap-northeast-2.amazonaws.com',
      's3.ap-northeast-2.amazonaws.com',
      'github.com',
    ],
  },
};

module.exports = withTM(nextConfig);
