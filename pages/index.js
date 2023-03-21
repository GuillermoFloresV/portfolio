import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import IndexContent from '../components/indexContent'

export async function getServerSideProps() {
  let activity = await fetch("https://api.github.com/users/guillermofloresv/events?per_page=10");
  let activityJSON = await activity.json();
  return {
      props: { activityJSON }
  };
}

export default function Home(props) {
  return (
    <div className="bg-transparent overflow-hidden">
      <Head>
        <title>Guillermo&apos;s Portfolio</title>
      </Head>
      <Navbar></Navbar>
      <IndexContent activities={props.activityJSON}></IndexContent>
      <Footer></Footer>
    </div>
  )
}
