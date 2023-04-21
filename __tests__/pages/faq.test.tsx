import { screen, render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Blog from "@/pages/blog";
import { FAQ } from '@/lib/contentful';
import FAQs from '@/pages/faq';

const testQAs: FAQ[] = [
    {
        question: 'blah blah?',
        answer: 'blah. blagablag'
    },
    {
        question: "blagablargi?",
        answer: "blazeblah blee"
    }
]

beforeEach(() => {
    render(<FAQs qas={testQAs} />)
})

describe('FAQ', () => {
    afterEach(cleanup);
    // it('renders a header', () => {
    //     const header = screen.getAllByRole("banner");

    //     expect(header).toBeInTheDocument();
    // });
    it('renders a banner', () => {
        const blogBanner = screen.getByTestId("faq-banner");

        expect(blogBanner).toBeInTheDocument();
    });
    
    it("renders a main content section", () => {
        const blogMain = screen.getByTestId("faq-main");

        expect(blogMain).toBeInTheDocument();
    });
});