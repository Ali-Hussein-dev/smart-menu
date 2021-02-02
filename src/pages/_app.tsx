import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '../css/global.css'
import Head from 'next/head'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'

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
