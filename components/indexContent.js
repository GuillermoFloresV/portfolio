import ProjectInfoCard from "./projectInfoCard";
import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";
import Wave from "./wave";
import GithubActivity from "./githubActivity";
import React from "react";

export default function indexContent(props) {
    return (
        <>
            <div className="bg-black flex flex-col justify-center content-center items-center h-screen w-full">
                <div className="sm:text-9xl text-3xl font-semibold 
                    bg-gradient-to-r bg-clip-text  text-transparent 
                    from-indigo-500 via-purple-500 to-indigo-500
                    animate-text ">
                    Hi there,
                </div>
                <div className="text-white sm:text-6xl text-2xl justify-center content-center items-center">
                    welcome to my portfolio.
                </div>
                <div className="text-white text-4xl animate-bounce pt-8">
                    <Link href={'#highlightedProjects'} passHref>
                        <AiOutlineArrowDown></AiOutlineArrowDown>
                    </Link>
                </div>
            </div>
            {/* Container for wave component */}
            <div className="bg-black m-0">
                <Wave color="#9333ea"></Wave>
            </div>
            <div className="bg-purple-600 flex flex-col items-center sm:h-screen h-fit w-full pt-12">
                <div id="highlightedProjects" className="sm:text-6xl text-2xl text-white">Recent Projects</div>
                <div className="flex grid w-full h-fit justify-center grid-cols-1 justify-items-center sm:grid-cols-2">
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
            <div className="bg-[#9333ea] m-0">
                <Wave color="#1d4ed8"></Wave>
            </div>
            <div className="bg-blue-700 text-white sm:text-6xl text-xl flex flex-col content-center pt-12 items-center h-fit w-full">
                <div className="flex sm:text-6xl text-2xl text-white">Recent Github Activity</div>
                <div id="githubActivity" className="w-full h-fit flex grid sm:grid-cols-2 grid cols-1 justify-center justify-items-center">
                    {props.activities.map(activity => 
                        <div key={activity.id} className="text-white text-4xl">
                            <GithubActivity activity={activity}></GithubActivity>  
                        </div>
                    )}
                </div>
                <div className="text-sm pt-8 sticky float-right">
                    Data is delayed by ~5 minutes due to GitHub constraints.
                </div>
            </div>
            <div className="bg-blue-700 m-0">
                <Wave color="#000"></Wave>
            </div>
        </>
    )
}
