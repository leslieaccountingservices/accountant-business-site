export default function Review({ reverse }: { reverse: boolean }) {
    return (
        reverse ? 
        <div className="bg-blue-300">
            
        </div>
        :
        <div className="bg-red-300">

        </div>
    )
}