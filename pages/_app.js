import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { Quicksand } from '@next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={`${quicksand.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
