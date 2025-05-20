import Navbar from './navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem', flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
