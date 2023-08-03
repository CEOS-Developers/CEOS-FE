import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>CEOS | 세오스</title>
        <link rel="icon" href="ceos-favicon.svg" />
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
        <meta property="og:title" content="CEOS | 세오스" />
        <meta
          property="og:description"
          content="CEOS는 연세대학교, 서강대학교, 이화여자대학교, 홍익대학교 학생들이 모인 최고의 IT 창업 학회입니다."
        />
        <meta
          property="og:image"
          content="https://github.com/CEOS-Developers/CEOS-FE/assets/103591752/5da7a41e-aaad-4df3-8f5b-4743cba9184a"
        />
      </Head>
      <body>
        <div id="modal_root"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
