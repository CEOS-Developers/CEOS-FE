import '@ceos/styles/globals.css';
import { globalStyle, theme } from '@ceos-fe/ui';
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { FloatingCss } from '@ceos/styles/landing';
import { FloatingButton } from '@ceos-fe/ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
      <div css={FloatingCss}>
        <FloatingButton />
      </div>
    </Layout>
  );
}
