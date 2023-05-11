import clientPromise from "../../lib/mongodb";
import ProjectInfoCard from "../../components/projectInfoCard";
import Wave from "../../components/wave";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Link from "next/link";
export default function Projects({projects}) {
    return (
        <div className="bg-black text-white h-fit overflow-hidden">
            <Navbar></Navbar>
            <Wave color={"#38bdf8"}></Wave>
            <div className="bg-sky-400 text-center">
                <div className="text-2xl text-center underline">This is a directory of my personal projects, </div>
                <div className="flex grid w-full h-fit justify-center grid-cols-1 justify-items-center sm:grid-cols-2">
                    {projects ? projects.map((project, index) =>(
                        <ProjectInfoCard 
                        key={index} 
                        projectName={project.name} 
                        projectDescription={project.description} 
                        liveDemo={project.demo}
                        githubLink={project.githubLink}></ProjectInfoCard>
                    ) 
                    ):  <div className="text-center">
                            Sorry, there was a problem reaching the database, if this issue persists please <Link className="text-blue-500 underline" href={"mailto:hello@gfloresv.dev"}>contact me</Link>.
                        </div>}

                </div>
                <Wave color={"#000"}></Wave>                
            </div>

            <Footer></Footer>
        </div>
    )
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("portfolio");
        const projects = await db
            .collection("projects")
            .find({})
            .limit(10)
            .toArray();
        return {
            props: { projects: JSON.parse(JSON.stringify(projects))},
        };
    } catch (e) {
        console.log(e);
        return {props: {projects:null}}
    }
}