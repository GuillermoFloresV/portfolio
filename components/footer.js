import Link from 'next/link'
import footerStyles from './footer.module.css'
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
export default function Footer() {
    return (
        <>
        <hr></hr>
        <div className={footerStyles.footer}>
            <p>©  Guillermo Flores V - 2022</p><br></br>
            <div>
                <div>
                    <Link href={"https://github.com/GuillermoFloresV"} passHref>
                        <a><BsGithub /></a>
                    </Link>
                </div>
                <div>
                    <Link href={"https://linkedin.com/in/~guillermo"} passHref>
                        <a><BsLinkedin /></a>
                    </Link>
                </div>
                <div>
                    <Link href={"mailto:gfloresv.dev"} passHref>
                        <a><BsFillEnvelopeFill /></a>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}