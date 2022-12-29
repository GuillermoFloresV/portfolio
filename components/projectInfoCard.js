import Link from "next/link";
export default function ProjectInfoCard(props){
    return (
        <>
            <div className="sm:max-w-sm bg-neutral-900 rounded shadow-lg text-center">
                <div className="px-6 py-4">
                    <div className="font-bold text-white text-xl mb-2">{props.projectName}</div>
                    <p className="text-base text-white">{props.projectDescription}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a>
                        <Link href={props.githubLink} passHref>
                            <button className="inline-block bg-blue-500 hover:bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Github Repo</button>
                        </Link>
                    </a>
                    {props.liveDemo ?  
                        <Link href={props.liveDemo} passHref>
                            <button className="inline-block bg-blue-500 hover:bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Live Demo</button> 
                        </Link>
                    :null}
                </div>
            </div>   
        </>
    )
}
