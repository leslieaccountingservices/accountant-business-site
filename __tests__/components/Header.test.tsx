import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";
import '@testing-library/jest-dom'

describe('Header', () => {
    it('renders', () => {
        render(<Header page="home" />);

        const head = screen.getByRole('banner');
        expect(head).toBeInTheDocument();
    })
})