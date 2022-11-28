import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import { makeServer } from './../services/mirage/index';

if (process.env.NODE_ENV == 'development') {
  makeServer();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SidebarDrawerProvider>
  )
}
