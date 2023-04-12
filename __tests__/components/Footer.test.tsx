import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '@/components/shared-ui/Footer'

describe('Footer', () => {
    it('renders', () => {
        render(<Footer />);

        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeInTheDocument();
    });

    it('renders a nav element', () => {
        render(<Footer />);

        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})