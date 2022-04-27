import Link from 'next/link'

export default function Navbar() {
    return (
        <div id="top" className="text-white flex justify-between bg-neutral-800 min-w-full p-4 items-center">
            <div>
                <p className="font-bold">Guillermo Flores V</p>
                <p className="font-thin">Software Engineer</p>
            </div>
            <div className="flex justify-end">
                <div className="pl-4 hidden">
                    <Link href={'/#highlightedProjects'} passHref>Projects</Link>
                </div>
                <div className="pl-4">
                    <Link href={'/resources/resume.pdf'} passHref>Resume</Link>
                </div>
            </div>
        </div>
    )
}