import { IReview } from "@/pages"
import Image from "next/image"

export default function Review({ review }: { review: IReview }) {
    return (
        <div className="h-fit w-full md:w-4/6 flex flex-col justify-center items-center my-4">
            <div className="h-20 w-20 rounded-full border border-navy bg-cyan-400 relative overflow-hidden">
                <Image fill src={`/static/images/${review.imageUrl}`} alt={`${review.fName}`} />
            </div>
            <div className="h-fit w-fit my-1">
                <p className="font-semibold text-sm">
                    {review.fName} <span className="">{review.lName}</span>
                </p>
            </div>
            <div className="h-fit w-5/6 bg-bone shadow-md p-2 border-4 border-navy rounded-md font-light">
                {review.review}
            </div>
        </div>
    )
}