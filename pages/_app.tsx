import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import AppContext from '../lib/context'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const [ device, setDevice ] = useState<string>('mobile')
  const [ shoppingCart, setShoppingCart ] = useState([])
  const removeAll = () => setShoppingCart([])
  useEffect(() => {
    setDevice(
      window.matchMedia(`(min-width: 1200px)`).matches 
      ? 'desktop'
      : window.matchMedia(`(min-width: 760px)`).matches 
      ? 'tablet'
      : 'mobile'
    ) 
  },[])
  return (
    <AppContext.Provider value={{ 
      state: { 
        device,
        shoppingCart 
      },
      setShoppingCart,
      removeAll
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
