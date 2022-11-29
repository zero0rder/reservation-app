import Head from 'next/head'
import { AppHeader } from '@components/layout/header'
import { AppFooter } from '@components/layout/footer'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DinDin</title>
        <meta name="description" content="Dindin App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader/>
      <Component {...pageProps} />
      <AppFooter/>
    </>
  )
}