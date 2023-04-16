import Link from "next/link"
import CalendarButton from "./CalendarButton";

export default function Header({ isHome = false }: { isHome?: boolean }) {
    
    return (
        <header className="fixed flex flex-col inset-0 h-fit w-screen   bg-forest z-20
        ">
            <div className="w-full h-16 flex justify-around items-center px-8">
                <nav>
                    <Link className="" href={`/`}>
                        <h1 className="md:text-xl w-fit font-extrabold text-white md:mr-4 italic">
                            Leslie's Accounting Services
                        </h1>
                    </Link>
                </nav>
                <nav className="h-4/6 sm:flex flex-1 items-center border-l-2 hidden">
                    <Link
                    className="text-sm text-white mx-1 md:mx-2 underline md:hover:text-myorange cursor-pointer"
                    href={`/#about`}>
                        About
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline md:hover:text-myorange cursor-pointer"
                    href={`/#services`}>
                        Services
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline md:hover:text-myorange cursor-pointer"
                    href={`/#reviews`}>
                        Reviews
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline md:hover:text-myorange cursor-pointer"
                    href={`/blog`}>
                        Blog
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline md:hover:text-myorange cursor-pointer"
                    href={`/faq`}>
                        FAQ
                    </Link>
                </nav>
                <CalendarButton freeConsult={true} />
            </div>
            <div className="h-fit w-full bg-forest flex justify-around px-4 md:hidden">
                <Link
                    className="text-sm text-white mx-2 underline"
                    href={`/#about`}>
                        About
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline"
                    href={`/#services`}>
                        Services
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline"
                    href={`/#reviews`}>
                        Reviews
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline"
                    href={`/blog`}>
                        Blog
                    </Link>
                    <Link
                    className="text-sm text-white mx-2 underline"
                    href={`/faq`}>
                        FAQ
                    </Link>
            </div>
        </header>
    )
}