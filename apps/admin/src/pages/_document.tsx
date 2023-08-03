import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>CEOS ADMIN</title>
        <link rel="icon" href="admin-favicon.svg" />
        <link
          href="https://fonts.cdnfonts.com/css/gilroy-bold"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
        />
        <meta property="og:title" content="CEOS ADMIN" />
        <meta
          property="og:image"
          content="https://ceos-web-17.s3.ap-northeast-2.amazonaws.com/activities/0bcb4af1-fdfe-428a-b0e8-87f12d931c67"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
