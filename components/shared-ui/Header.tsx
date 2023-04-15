import Link from "next/link"
import CalendarButton from "./CalendarButton";

export default function Header({ isHome = false }: { isHome?: boolean }) {
    // put links under header as new div (for mobile/responsive)
    return (
        <header className="fixed flex flex-col inset-0 h-fit w-full   bg-forest z-20
        ">
            <div className="w-full h-16 flex justify-around items-center px-8">
                <nav>
                    <Link className="" href={`/`}>
                        <h1 className="text-xl font-extrabold text-white mr-2 italic">
                            Leslie's Accounting Services
                        </h1>
                    </Link>
                </nav>
                <nav className="h-4/6 sm:flex flex-1 items-center border-l-2 hidden">
                    <Link
                    className="text-sm text-white mx-2 underline hover:text-myorange cursor-pointer"
                    href={`/#about`}>
                        About
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline hover:text-myorange cursor-pointer"
                    href={`/#services`}>
                        Services
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline hover:text-myorange cursor-pointer"
                    href={`/#reviews`}>
                        Reviews
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline hover:text-myorange cursor-pointer"
                    href={`/blog`}>
                        Blog
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline hover:text-myorange cursor-pointer"
                    href={`/faq`}>
                        FAQ
                    </Link>
                </nav>
                <CalendarButton />
            </div>
            <div className="h-fit w-full bg-forest flex justify-around px-4 md:hidden">
                <Link
                    className="text-sm text-white mx-2 underline hover:text-myorange cursor-pointer"
                    href={`/#about`}>
                        About
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline hover:text-myorange cursor-pointer"
                    href={`/#services`}>
                        Services
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline hover:text-myorange cursor-pointer"
                    href={`/#reviews`}>
                        Reviews
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline hover:text-myorange cursor-pointer"
                    href={`/blog`}>
                        Blog
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline hover:text-myorange cursor-pointer"
                    href={`/faq`}>
                        FAQ
                    </Link>
            </div>
        </header>
    )
}