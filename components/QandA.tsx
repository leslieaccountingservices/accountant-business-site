
export default function QandA({ question, answer }: { question: string, answer: string }) {

    return (
        <details>
            <summary data-testid="question" className="text-2xl font-semibold md:font-normal md:text-3xl mb-4">{question}</summary>
            <p data-testid="answer" className="text-lg mb-4 ml-4 md:ml-8">{answer}</p> 
        </details>
    )
}