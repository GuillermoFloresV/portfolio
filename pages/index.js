import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import IndexContent from '../components/indexContent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Navbar></Navbar>
        <title>Guillermo&apos;s Portfolio</title>
        <meta name="description" content="Guillermo Flores V Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexContent></IndexContent>
      <Footer></Footer>
    </div>
  )
}
