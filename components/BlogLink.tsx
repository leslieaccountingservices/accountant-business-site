import Link from "next/link"
import Image from "next/image"
import { Entry } from "@/lib/contentful"
import { useEffect, useState } from "react"

export default function BlogLink({ entry }: { entry: Entry}) {
  useEffect(() => {
    console.log(entry)
  }, [])

  return (
    <Link className="w-80 h-96 m-12 rounded-md shadow-lg bg-bone overflow-hidden"
    href={`/blog/${entry.id}`}>
        <div className="h-4/6 w-full relative">
          <Image fill alt={entry.title} src={entry.thumbnail} />
          {/* add sizes prop to Image tag */}
        </div>
    </Link>
  )
}
