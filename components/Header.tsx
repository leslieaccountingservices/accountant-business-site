import Link from "next/link"

export default function Header() {
    return (
        <div className="fixed h-16 w-full px-8 flex justify-between items-center bg-red-300">
            <nav>
                Social Links
            </nav>
            <h1>Leslie's Accounting Services</h1>
            <Link href="/blog">
                <span className="">Blog</span>
            </Link>
        </div>
    )
}