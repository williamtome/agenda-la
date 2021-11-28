import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto shadow bg-red-100 p-8'>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
