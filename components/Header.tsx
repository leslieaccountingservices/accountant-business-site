import Link from "next/link"
import Image from "next/image";
import SocialLink from "./shared-ui/SocialLink"

export default function Header({ page }: { page: string}) {
    return (
        <header className="fixed h-16 w-full px-8 flex justify-around items-center bg-forest z-10">
            <nav>
                <Link className="flex flex-row bg-lim" href={`/`}>
                    <div className="h-16 w-16 rounded-lg">
                        <img
                            src={`/static/images/logo.jpg`}
                            
                            alt={`logo image`}
                        />
                    </div>
                    <div>
                        Leslie's
                        <br />
                        Accounting Services
                    </div>
                </Link>
            </nav>
            <h1 className="flex flex-1 justify-center text-center bg-orange-300">Leslie's Accounting Services</h1>
            {page === "home" ? 
            <Link data-testid="headerLink" href="/blog">
                <span className="">Blog</span>
            </Link> : 
            <Link data-testid="headerLink" href="/faq">
                <span className="">FAQ</span>
            </Link> }
        </header>
    )
}