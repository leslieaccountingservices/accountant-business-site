import QandA from "@/components/QandA";
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("QandA", () => {
    it("renders", () => {
        render(<QandA question="what's up?" answer="nm u?" />);

        const qanda = screen.getByRole("group");
        expect(qanda).toBeInTheDocument();
    });

    it("renders a question", () => {
        render(<QandA question="what's up?" answer="nm u?" />)

        const question = screen.getByTestId("question")
        expect(question).toBeInTheDocument();
    })

    it("renders an answer", () => {
        render(<QandA question="what's up?" answer="nm u?" />);

        const answer = screen.getByTestId("answer");
        expect(answer).toBeInTheDocument();
    })
})