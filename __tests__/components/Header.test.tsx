import { render, screen } from "@testing-library/react";
import Header from "../../components/shared-ui/Header";
import '@testing-library/jest-dom'

describe('Header', () => {
    it('renders', () => {
        render(<Header />);

        const head = screen.getByRole('banner');
        expect(head).toBeInTheDocument();
    });

    it('displays the main title', () => {
        render(<Header  />);

        const title = screen.getByRole('heading');
        expect(title).toBeInTheDocument();
    });

    const types: Array<string> = ["home", "blog", "post"];

    for (let i = 0; i < types.length; i++) {
        it(`renders the appropriate link for ${types[i]}`, () => {
            render(<Header />)

            const link = screen.getByTestId("headerLink");
            expect(link).toBeInTheDocument();
            if (types[i] === "home") {
                expect(link).toHaveAttribute('href', "/blog");
            } else {
                expect(link).toHaveAttribute('href', '/faq')
            }
        })
    };
})