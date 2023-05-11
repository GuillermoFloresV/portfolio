import Link from 'next/link'
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
export default function Footer() {
    return (
        <div className='bg-transparent w-full'>
            <div className='flex justify-center'>
                <hr className='w-3/4'></hr>
            </div>
            <div className="text-gray-300 flex justify-between items-center p-8  sm:p-16 sm:text-xl text-md">
                <div className='flex-1 justify-start'>
                    <div>
                        <Link href={'/projects'}>Projects</Link>
                    </div>
                    <div>
                        <Link href={'/resources/resume.pdf'}>Resume</Link>
                    </div>
                    <div>
                        © Guillermo Flores V
                    </div>
                        
                </div>
                <div className="flex-1 justify-end">
                    <div className="pl-8 float-right sm:text-2xl text-md">
                        <Link href={"https://github.com/GuillermoFloresV"} passHref>
                            <BsGithub />
                        </Link>
                    </div>
                    <div className="pl-8 float-right sm:text-2xl text-md">
                        <Link href={"https://linkedin.com/in/~guillermo"} passHref>
                            <BsLinkedin />
                        </Link>
                    </div>
                    <div className="float-right sm:text-2xl text-md">
                        <Link href={"mailto:hello@gfloresv.dev"} passHref>
                            <BsFillEnvelopeFill />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}