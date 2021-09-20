import FormProvider from '../context'
import '../styles/globals.css'

type MyAppType = {
  Component: any;
  pageProps: any;
}

const MyApp = (props: { Component: any; pageProps: any; }) => {

  const {Component, pageProps } = props;
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  )
}

export default MyApp
