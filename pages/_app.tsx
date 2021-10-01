import FormProvider from '../context'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
// TODO: Update TSCONFIG
// TODO: Update CI
// TODO: Write Tests
function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
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
