import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


export default function Home() {
    return (
      <div className="bg-black overflow-x-auto">
        <Head>
          <title>About Me</title>
        </Head>
        <Navbar></Navbar>
        <div className='min-h-screen w-full overflow-auto p-8'>
            <div className="flex justify-left text-xl font-medium pt-16 pb-4 indent-8 text-white sm:text-5xl">
                <p>
                    My name is Guillermo Flores V and I am a full-stack engineer. I hold a BS in Computer Science (concentration in Software Engineering) from California State University, Monterey Bay.
                </p>
            </div>
            <div className='text-white text-2xl pb-16'>During my time at CSUMB, I had two (2) internships, both with (at the time) Facebook, now know as Meta. I also started to contribute to open source software through a new project at freeCodeCamp currently known as Classroom Mode.</div>

            <div id='workExperience' className='flex justify-right text-5xl font-medium pt-16 pb-4 text-white underline'>
                Work experience
            </div>
            <div className='grid sm:grid-cols-3  gap-4 grid-cols-1'>  
                {/*There are 3 columns here, but there I use 2 of them as 1. */}
                <div className='p-16'>
                    <Image src={'/fcc_primary_small.png'} alt={"Logo of free code camp"} height={300} width={400}></Image>
                </div>
                <div className='col-span-2 pr-8 text-white text-3xl'>
                    Currently, I am a volunteer contributor @ freeCodeCamp. I am working on the Classroom Mode project as a fullstack developer and have been working on it since January 2022.
                    The project introduced me to NextJS, the framework this website is currently using! 
                </div>
                <div className='p-16'>
                    <Image src={'/fb_logo.png'} alt={"Logo of Facebook"} height={250} width={250}></Image>
                </div>
                <div className='col-span-2 pr-8 text-white text-3xl'>
                    During my time at Facebook, I worked under the Messenger Commerce team (MCOM). I was an full-stack intern working mainly with React, GraphQL, and Hack. I created a GraphQL query to be able to handle multiple
                    mutations at once as well as developed the UI for users to be able to use this query. I worked alongside my manager, mentors, and the team product designer to build the feature. 
                </div>
            </div>
        </div>

        <Footer></Footer>
      </div>
    )
  }