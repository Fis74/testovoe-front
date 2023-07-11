import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'nprogress/nprogress.css'
import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout/Layout'
import { useEffect } from 'react'
const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState)
  const router = useRouter()
  NProgress.configure({
    showSpinner: false,
  })
  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    router.events.on('routeChangeStart', handleRouteStart)
    router.events.on('routeChangeComplete', handleRouteDone)
    router.events.on('routeChangeError', handleRouteDone)

    return () => {
      router.events.off('routeChangeStart', handleRouteStart)
      router.events.off('routeChangeComplete', handleRouteDone)
      router.events.off('routeChangeError', handleRouteDone)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Provider store={store}>
      <>
        <Head>
          <title>YORCOM</title>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Диваны" />
          <meta name="keywords" content="Диваны" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </Provider>
  )
}

export default MyApp
