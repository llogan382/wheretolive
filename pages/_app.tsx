import React from 'react'
import FormProvider from '../context'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'

interface MyAppType {
  Component: any;
  pageProps: any;
}
declare global {
  interface Window {
    Gtag: (...args: any[]) => void;
  }
}
const MyApp = (props: MyAppType ) => {

  const {Component, pageProps } = props;
// TODO: Update TSCONFIG
// TODO: Update CI
// TODO: Write Tests
// TODO: Add storybook



  const router = useRouter()

  useEffect(() => {
    let Gtag = window.Gtag;
    function handleRouteChange(url: any) {
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
