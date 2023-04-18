import { screen, render } from "@testing-library/react";
import Review from "@/components/Review";
import '@testing-library/jest-dom'

const testReview = {
    id: "testid",
    imageUrl: "/imageurl",
    fName: "bob",
    lName: "thomas",
    rating: 5,
    review: "lorem ipsum"
}

describe("Review", () => {
    it("renders a review", () => {
        render(<Review review={testReview} />);

        const review = screen.getByRole("img")
        expect(review).toBeInTheDocument();
    })
})