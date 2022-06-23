import Link from "next/link"
import { AiOutlineArrowDown } from "react-icons/ai";
import ProjectInfoCard from "./projectInfoCard";
export default function indexContent() {
    return (
        <>
            <div>
                <div className="flex justify-left pt-8 pb-8 text-3xl font-extralight">
                    <h1 className="-skew-y-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Hello there!</h1>
                </div>
                <div className="flex justify-left text-2xl font-medium pt-4 pb-4 indent-8">
                    <h1>
                        I&apos;m a new graduate from Cal State University, Monterey Bay with a BS in Computer Science.
                        Currently interested in Full Stack developer roles, but am open to front end and back end roles as well.
                        This year, I have started to do Open Source contributions over at <Link href={'https://freecodecamp.org'}>freeCodeCamp!</Link>
                        <br></br>
                    </h1>
                </div>
                <div className="flex justify-left text-2xl font-medium pt-4 pb-4 indent-8">
                <h1>For now the website is pretty bare bones as I wanted to get something up and running, but I have plans to add a blog, along with user authentication to allow for users to comment on my posts that I write. 
                    As well as adding a way to quickly see my Github activity without having to leave the website.</h1>
                </div>
                <div className="min-h-screen">
                    <div className="hidden">
                        <div className="flex justify-center text-3xl p-8">Want to skip everything and check out what I&apos;ve been up to?</div>
                        <div className="flex justify-center text-xl">Click the arrow below or the projects section of the navbar</div>
                        <div className="flex justify-center text-3xl p-8">
                            <Link href={"#highlightedProjects"} passHref>
                                <svg className="animate-bounce w-8 h-8 content-center"> <AiOutlineArrowDown /> </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-left pb-8 pt-8 text-3xl">Recent projects:</div>
                    <div className="flex grid gap-4 grid-cols-2 justify-items-center p-4">
                        <ProjectInfoCard 
                            projectName="freeCodeCamp Classroom"
                            projectDescription="A self-hosted solution to help teachers plan and manage classroom-based learning, on top of freeCodeCamp&apos;s learn platform.                            "
                            githubLink="https://github.com/freecodecamp/classroom"
                            liveDemo={null}

                        />
                        <ProjectInfoCard
                            projectName="My Portfolio"
                            projectDescription="A one-stop-shop to view my projects, resume, and find ways to contact me. "
                            githubLink="https://github.com/GuillermoFloresV/portfolio"
                            liveDemo="https://gfloresv.dev"
                        />
                    </div>
                </div>                    
                <div id="highlightedProjects" className="flex grid gap-4 grid-cols-2 justify-items-center p-4 hidden">
                </div>
            </div>
        </>
    )
}
