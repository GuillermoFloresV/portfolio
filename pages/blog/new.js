import Head from 'next/head';
import CreatePost from '../../components/createpost';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog App</title>
      </Head>
      <h1>Blog</h1>
      <CreatePost></CreatePost>
    </div>
  )
}
