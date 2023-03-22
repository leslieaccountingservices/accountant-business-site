import Link from "next/link"
import { Entry } from "@/pages/blog/index"

export default function BlogLink({ entry }: { entry: Entry}) {
  return (
    <Link className="w-80 h-96 m-12 bg-slate-500"
    href={`/blog/${entry.slug}`}>
        <div>
          {entry.title}
        </div>
    </Link>
  )
}
