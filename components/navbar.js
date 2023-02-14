import Link from 'next/link'
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
export default function Navbar() {
    return (
        <div className='w-full'>
            <div id="top" className="flex items-center text-gray-100 flex justify-between items-center w-full p-4 ">
                <div className='flex-1'>
                    <p className="font-bold">Guillermo Flores V</p>
                    <hr></hr>
                    <p className="font-thin">Software Engineer</p>
                </div>
                <div className="flex items-center justify-end w-full">
                    <div className="pl-4 float-right hidden">
                        <Link href={'/#highlightedProjects'} passHref>Projects</Link>
                    </div>
                    <div className="pl-4 float-right">
                        <Link href={'/resources/resume.pdf'} passHref>Resume</Link>
                    </div>
                    <div className="pl-4 float-right">
                        <Link href={'/about'} passHref>About</Link>
                    </div>
                    <div className="pl-4 float-right">
                        <Link href={"/"} passHref>
                            <a><AiOutlineHome></AiOutlineHome></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}