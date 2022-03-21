import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import AppContext from '../lib/context'
import Layout from '../components/Layout'
import { CartItems } from '../lib/types'
import data from '../public/data.json'

const cart: CartItems = {}
data.map((e) => cart[e.name] = 0)

function MyApp({ Component, pageProps }: AppProps) {
  const [ device, setDevice ] = useState<string>('mobile')
  const [ shoppingCart, setShoppingCart ] = useState<CartItems>(cart)
  const removeAll = () => setShoppingCart(cart)
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
