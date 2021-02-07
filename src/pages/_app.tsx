import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '../css/global.css'
import Head from 'next/head'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import Footer from '@/components/Footer'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Interactive Menu</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="z-10 bg-white">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ChakraProvider>
  )
}
