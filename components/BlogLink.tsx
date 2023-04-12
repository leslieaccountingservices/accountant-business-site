import Link from "next/link"
import Image from "next/image"
import { Entry } from "@/lib/contentful"
import { useEffect, useState } from "react"

export default function BlogLink({ entry }: { entry: Entry}) {
  // useEffect(() => {
  //   console.log(entry)
  // }, [])

  const localizeDate = (date: string) => {
    let localDate: Date = new Date(date);
    let localstring: string = localDate.toString()

    return localstring
  }

  const fullMonth = (month: string) => {
    let newMonth: string = "";

    switch(month) {
      case "Jan":
        newMonth = "January";
        break;
      case "Feb":
        newMonth = "February";
        break;
      case "Mar":
        newMonth = "March";
        break;
      case "Apr":
        newMonth = "April";
        break;
      case "Aug":
        newMonth = "August";
        break;
      case "Sept":
        newMonth = "September";
        break;
      case "Oct":
        newMonth = "October";
        break;
      case "Nov":
        newMonth = "November";
        break;
      case "Dec":
        newMonth = "December";
      default:
        newMonth = month
        break;
    }

    return newMonth
  }

  const parseDate = (date: string) => {
    //change date from UTC to locas
    let localizedDate: string = localizeDate(date);

    // removed localization indicator
    const openParIdx: number = localizedDate.indexOf("(");

    // removed GMT stuff
    let justTheDate: string = localizedDate.slice(0, openParIdx).substring(4, 15);

    // chooses where to place comma based on length of string
    let commaPlacement: number = justTheDate.length === 10 ? 5 : 6;

    // adds comma to string
    let addedComma: string = justTheDate.slice(0, commaPlacement) + "," + justTheDate.slice(commaPlacement)

    // creates full month string out of abbreviated month string
    let month: string = fullMonth(addedComma.substring(0, 3)) + addedComma.substring(3, addedComma.length)

    return month
  }

  return (
    <Link className="w-80 h-96 m-12 rounded-md border border-black shadow-lg bg-bone overflow-hidden transition ease-in-out delay-50 hover:scale-110 hover:border-navy duration-300"
    href={`/blog/${entry.id}`} target={`_blank`}>
        <div className="h-4/6 w-full relative">
          <Image fill alt={entry.title} src={entry.thumbnail} />
          {/* add sizes prop to Image tag */}
        </div>
        <div className="h-2/6 w-full flex flex-col p-1">
          <h3 className="text-xl font-semibold flex flex-1">{entry.title}</h3>
          <div className="text-sm text-navy w-full flex justify-between">
            <span>Leslie Garcia</span>
            <span>{parseDate(entry.createdAt)}</span>
            
          </div>
        </div>
    </Link>
  )
}
