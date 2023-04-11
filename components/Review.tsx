import { IReview } from "@/pages"
import Image from "next/image"

export default function Review({ review }: { review: IReview }) {
    return (
        <div className="h-fit w-4/6 flex flex-col justify-center items-center my-4">
            <div className="h-20 w-20 rounded-full border border-navy bg-cyan-400 relative overflow-hidden">
                <Image fill src={`/static/images/${review.imageUrl}`} alt={`${review.fName}`} />
            </div>
            <div className="h-4 w-24 bg-green-400 my-1">

            </div>
            <div className="h-20 w-5/6 bg-blue-400">
                {review.review} - {review.fName} {review.lName}
            </div>
        </div>
    )
}