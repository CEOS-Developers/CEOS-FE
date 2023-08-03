import '@ceos/styles/globals.css';
import { Desktop, globalStyle, theme } from '@ceos-fe/ui';
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { FloatingCss } from '@ceos/styles/landing';
import { FloatingButton } from '@ceos-fe/ui';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider theme={theme}>
              <Global styles={globalStyle} />
              <Component {...pageProps} />
            </ThemeProvider>
            <Desktop css={FloatingCss}>
              <FloatingButton />
            </Desktop>
          </Hydrate>
        </Layout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
