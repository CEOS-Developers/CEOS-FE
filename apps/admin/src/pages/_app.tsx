import { Layout } from '@admin/components/layout';
import '@admin/styles/globals.css';
import { globalStyle, theme } from '@ceos-fe/ui';
import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <ThemeProvider theme={theme}>
            <Global styles={globalStyle} />
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}
