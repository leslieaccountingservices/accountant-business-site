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

    const links: Array<string> = ["home", "about", "services", "reviews", "blog", "faq"];

    for (let i = 0; i < links.length; i++) {
        it(`renders the appropriate link for ${links[i]}`, () => {
            render(<Header />)

            const link = screen.getByTestId(links[i] + "-link");
            expect(link).toBeInTheDocument();
            if (links[i] === "home") {
                expect(link).toHaveAttribute('href', `/`);
            } else if (links[i] === "blog" || links[i] === "faq") {
                expect(link).toHaveAttribute('href', `/${links[i]}`);
            } else {
                expect(link).toHaveAttribute('href', `/#${links[i]}`)
            }
        })
    };
})