import FormProvider from '../context'
import '../styles/globals.css'
// TODO: Update TSCONFIG
// TODO: Update CI
// TODO: Write Tests
function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  )
}

export default MyApp
