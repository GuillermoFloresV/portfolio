import Link from 'next/link'
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
export default function Footer() {
    return (
        <div className='bg-black w-full'>
            <div className='flex justify-center'>
                <hr className='w-3/4'></hr>
            </div>
            <div className="text-gray-100 flex justify-between items-center p-8  sm:p-16 sm:text-xl text-md">
                <p>©  Guillermo Flores V - 2022</p>
                <div className="flex-1 justify-end">
                    <div className="pl-12 float-right sm:text-2xl text-md">
                        <Link href={"https://github.com/GuillermoFloresV"} passHref>
                            <BsGithub />
                        </Link>
                    </div>
                    <div className="pl-12 float-right sm:text-2xl text-md">
                        <Link href={"https://linkedin.com/in/~guillermo"} passHref>
                            <BsLinkedin />
                        </Link>
                    </div>
                    <div className="pl-12 float-right sm:text-2xl text-md">
                        <Link href={"mailto:hello@gfloresv.dev"} passHref>
                            <BsFillEnvelopeFill />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}