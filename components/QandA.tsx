
export default function QandA({ question, answer }: { question: string, answer: string }) {

    return (
        <details>
            <summary data-testid="question" className="text-3xl mb-4">{question}</summary>
            <p data-testid="answer" className="text-lg mb-4 ml-8">{answer}</p> 
        </details>
    )
}