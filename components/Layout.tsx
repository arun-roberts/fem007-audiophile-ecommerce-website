import Header from './Header'
import Footer from './Footer'
import { useContext } from 'react'
import AppContext from '../lib/context'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const value = useContext(AppContext)
  let { isNavVisible } = value.state
  return (
      <>
          <Header />
          {children}
          <Footer />
      </>
  )
}

export default Layout