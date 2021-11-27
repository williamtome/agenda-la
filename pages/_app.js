import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto shadow bg-red-100 p-8'>
        <div className='mb-4'>
          <h1 className='font-bold'>Agenda Lá</h1>
          <div>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/about'>
              <a>Sobre</a>
            </Link>
          </div>
        </div>
        <Component {...pageProps} />
        <footer className='mt-6 text-center'>
          <p className='font-bold'>Agenda Lá</p>
          <p>Projeto construído no Fullstack Master</p>
        </footer>
      </div>
    </>
  )
}

export default MyApp
