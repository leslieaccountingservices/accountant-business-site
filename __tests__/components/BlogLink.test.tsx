import BlogLink from "@/components/BlogLink";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

const testEntry = {
    metadata: {
        tags: []
    },
    id: "testId",
    createdAt: "",
    title: "myTitle",
    thumbnail: "/any"
}

describe("BlogLink", () => {
    it("renders a link", () => {
        render(<BlogLink entry={testEntry} />);

        const link = screen.getByText("myTitle");
        expect(link).toBeInTheDocument();
    });

    it("links to proper blog post", () => {
        render(<BlogLink entry={testEntry} />);

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "/blog/testId")
    })
})