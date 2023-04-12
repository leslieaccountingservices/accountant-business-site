
export default function QandA({ question, answer }: { question: string, answer: string }) {

    return (
        <details>
            <summary className="text-3xl mb-4">{question}</summary>
            <p className="text-lg mb-4 ml-8">{answer}</p> 
        </details>
    )
}