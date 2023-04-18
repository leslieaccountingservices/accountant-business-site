import { screen, render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Blog from "@/pages/blog";
import { EntrySummary } from '@/lib/contentful';

const testEntries: EntrySummary[] = [
    {
        metadata: {
            tags: []
        },
        id: "testId",
        createdAt: "1",
        title: "myTitle",
        thumbnail: "/any"
    },
    {
        metadata: {
            tags: []
        },
        id: "testId2",
        createdAt: "2",
        title: "myTitle2",
        thumbnail: "/any2"
    }
]

describe('Blog', () => {
    afterEach(cleanup);
    // it('renders a header', () => {
    //     const header = screen.getAllByRole("banner");

    //     expect(header).toBeInTheDocument();
    // });
    it('renders a banner', () => {
        render(<Blog entries={[]} />);
        const blogBanner = screen.getByTestId("blog-banner");

        expect(blogBanner).toBeInTheDocument();
    });
    
    it("renders a main content section", () => {
        render(<Blog entries={[]} />);
        const blogMain = screen.getByTestId("blog-main");

        expect(blogMain).toBeInTheDocument();
    });

    it("does not render a post section when passed an empty array", () => {
        render(<Blog entries={[]} />);
        const blogPosts = screen.queryByTestId("blog-posts");

        expect(blogPosts).not.toBeInTheDocument();
    });

    it("renders a post section when passed a non-empty array", () => {
        render(<Blog entries={testEntries} />);
        const blogPosts = screen.getByTestId("blog-posts");

        expect(blogPosts).toBeInTheDocument();
    })
})