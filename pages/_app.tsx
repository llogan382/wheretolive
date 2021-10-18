import FormProvider from '../context'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'

type MyAppType = {
  Component: any;
  pageProps: any;
}

const MyApp = (props: { Component: any; pageProps: any; }) => {

  const {Component, pageProps } = props;
// TODO: Update TSCONFIG
// TODO: Update CI
// TODO: Write Tests

declare global {
interface Window {
  Gtag: (...args: any[]) => void;
}
}


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    let Gtag = window.Gtag;
    const handleRouteChange = url => {
      window.Gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  )
}

export default MyApp
