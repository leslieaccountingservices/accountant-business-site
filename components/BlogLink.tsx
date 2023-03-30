import Link from "next/link"
import { Entry } from "@/lib/contentful"

export default function BlogLink({ entry }: { entry: Entry}) {
  return (
    <Link className="w-80 h-96 m-12 bg-slate-500"
    href={`/blog/${entry.id}`}>
        <div>
          {entry.title}
          <br />
          {entry.id}
        </div>
    </Link>
  )
}
