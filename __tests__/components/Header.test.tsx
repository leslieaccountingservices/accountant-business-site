import { render, screen } from "@testing-library/react";
import Link from "next/link";
import Header from "../../components/Header";
import '@testing-library/jest-dom'

describe('Header', () => {
    it('renders', () => {
        render(<Header page="home" />);

        const head = screen.getByRole('banner');
        expect(head).toBeInTheDocument();
    });

    it('displays the main title', () => {
        render(<Header page="home" />);

        const title = screen.getByRole('heading');
        expect(title).toBeInTheDocument();
    });

    const types: Array<string> = ["home", "blog", "post"];
    const links = [
      <Link href='/blog'><span className="">Blog</span></Link>,
      <Link href='/faq'><span className="">FAQ</span></Link>,
      null
    ]
    for (let i = 0; i < types.length; i++) {
        it(`renders the appropriate link for ${types[i]}`, () => {
            render(<Header page={types[i]} />)

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