import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '../css/global.css'
import Head from 'next/head'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Smart Gastkarte</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
