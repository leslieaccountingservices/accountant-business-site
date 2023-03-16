import { spawn } from "child_process"
import Link from "next/link"
import SocialLink from "./shared-ui/SocialLink"

export default function Header({ page }: { page: string}) {
    return (
        <header className="fixed h-16 w-full px-8 flex justify-around items-center bg-red-300 z-10">
            <nav>
                <SocialLink />
            </nav>
            <h1 className="flex flex-1 justify-center text-center">Leslie's Accounting Services</h1>
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