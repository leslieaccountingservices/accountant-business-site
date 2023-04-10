import Link from "next/link"
import Image from "next/image";
import SocialLink from "./shared-ui/SocialLink"
import { useContext } from "react";
import CalendarButton from "./CalendarButton";

export default function Header({ isHome = false }: { isHome?: boolean }) {

    return (
        <header className="fixed inset-0 h-16 w-full px-8 flex justify-around items-center bg-forest z-20">
            <nav>
                <Link className="" href={`/`}>
                    <h1 className="text-xl font-extrabold text-white mr-2 italic">
                        Leslie's Accounting Services
                    </h1>
                </Link>
            </nav>
            <nav className="h-4/6 flex flex-1 items-center border-l-2">
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
        </header>
    )
}