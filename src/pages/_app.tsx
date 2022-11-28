import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import { makeServer } from './../services/mirage/index';
import { QueryClient, QueryClientProvider } from 'react-query'

if (process.env.NODE_ENV == 'development') {
  makeServer();
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
    </QueryClientProvider>
  )
}
