import { FC, PropsWithChildren } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
