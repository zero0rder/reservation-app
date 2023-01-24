import Head from 'next/head'
import { AppHeader } from '@components/layout/header'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reservation Hub</title>
        <meta name="description" content="Reservation Hub" />
      </Head>
      <AppHeader/>
      <Component {...pageProps} />
    </>
  )
}