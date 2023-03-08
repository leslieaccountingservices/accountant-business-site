import Link from "next/link"
import SocialLink from "./shared-ui/SocialLink"

export default function Header() {
    return (
        <header className="fixed h-16 w-full px-8 flex justify-around items-center bg-red-300">
            <nav>
                <SocialLink />
            </nav>
            <h1 className="flex flex-1 justify-center text-center">Leslie's Accounting Services</h1>
            <Link href="/blog">
                <span className="">Blog</span>
            </Link>
        </header>
    )
}