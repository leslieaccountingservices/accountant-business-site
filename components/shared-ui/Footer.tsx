import SocialLink from "./SocialLink"

export default function Footer({ isHome = false }: { isHome: boolean }) {
  return (
    <footer className={`flex flex-col items-center py-6 w-full h-fit ${isHome ? "bg-white" : null}`}>
      <nav>
        <SocialLink />
      </nav>
      <span className="text-center">Copyright © 2023 Leslie's Accounting Services - All rights reserved.</span>
    </footer>
  )
}
