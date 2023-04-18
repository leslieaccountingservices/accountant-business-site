import { screen, render, cleanup } from "@testing-library/react";
import { Post } from "@/pages/blog/[post]";
import "@testing-library/jest-dom";
import { Entry } from "@/lib/contentful";

const entry: Entry = {
    metadata: {
        tags: []
    },
    id: "id1",
    createdAt: "2023-04-14T17:54:23.819Z",
    updatedAt: "2023-04-18T00:32:51.260Z",
    type: "a type",
    title: "This is my title",
    description: "This is my description",
    headerImage: {
        fields: {
            file: {
                url: "/any"
            }
        }
    },
    body: "lorem 300"
}

beforeEach(() => {
    render(<Post post={entry} />)
});

describe("post page", () => {
    // afterEach(cleanup);

    it("renders itself", () => {
        const postPage = screen.getByTestId("post")

        expect(postPage).toBeInTheDocument();
    });

    it("renders a banner", () => {
        const postBanner = screen.getByTestId("post-banner");

        expect(postBanner).toBeInTheDocument();
    });

    it("renders an article", () => {
        const article = screen.getByTestId("post-article");

        expect(article).toBeInTheDocument();
    });
})