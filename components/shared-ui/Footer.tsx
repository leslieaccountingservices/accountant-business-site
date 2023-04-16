import SocialLink from "./SocialLink"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-6 w-full h-fit">
      <nav>
        <SocialLink />
      </nav>
      <span className="text-center">Copyright © 2023 Leslie's Accounting Services - All rights reserved.</span>
    </footer>
  )
}
