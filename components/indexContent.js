import ProjectInfoCard from "./projectInfoCard";
import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
export default function indexContent() {
    return (
        <>
            <div className="">
                <div className="flex flex-col justify-center content-center items-center min-h-screen w-full">
                    <div className="sm:text-9xl text-3xl font-semibold 
                        bg-gradient-to-r bg-clip-text  text-transparent 
                        from-indigo-500 via-purple-500 to-indigo-500
                        animate-text ">
                        Hi there,
                    </div>
                    <div className="text-white sm:text-6xl text-xl justify-center content-center items-center">
                        welcome to my portfolio.
                    </div>
                    <div className="text-white text-4xl animate-bounce pt-8">
                        <Link href={'#highlightedProjects'} passHref>
                            <AiOutlineArrowDown></AiOutlineArrowDown>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center content-center items-center min-h-screen w-full">
                    <div className="pb-12 sm:text-6xl text-xl text-white">Recent Projects</div>
                    <div id="highlightedProjects" className="flex grid gap-48 grid-cols-1 justify-items-center p-4 sm:grid-cols-2">
                        <div>
                            <ProjectInfoCard 
                                projectName="freeCodeCamp Classroom"
                                projectDescription="A self-hosted solution to help teachers plan and manage classroom-based learning, on top of freeCodeCamp&apos;s learn platform.                            "
                                githubLink="https://github.com/freecodecamp/classroom"
                                liveDemo={null}

                            />
                        </div>
                        <div>
                            <ProjectInfoCard
                                projectName="My Portfolio"
                                projectDescription="A one-stop-shop to view my projects, resume, and find ways to contact me. "
                                githubLink="https://github.com/GuillermoFloresV/portfolio"
                                liveDemo="https://gfloresv.dev"
                            />
                        </div>
                        <div>
                            <ProjectInfoCard
                                projectName="How far am I from the ISS?"
                                projectDescription="Ever wondered how far away the ISS is from your current location? Find out using this neat tool!"
                                githubLink="https://github.com/GuillermoFloresV/portfolio/pull/5/files"
                                liveDemo="https://gfloresv.dev/projects/iss"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
