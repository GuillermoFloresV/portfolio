import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import IndexContent from '../components/indexContent'

export default function Home() {
  return (
    <div className="bg-black overflow-x-auto">
      <Head>
        <title>Guillermo&apos;s Portfolio</title>
      </Head>
      <Navbar></Navbar>
      <IndexContent></IndexContent>
      <Footer></Footer>
    </div>
  )
}
