import { render, screen } from "@testing-library/react";
import Loader from "@/components/shared-ui/Loader";
import '@testing-library/jest-dom'

describe('Loader', () => {
    it('renders a div if show is true', () => {
        render(<Loader show={true} />);

        const loader = screen.getByRole('status');
        expect(loader).toBeInTheDocument();
    });

    it('does not render a div if show is false', () => {
        render(<Loader show={false} />);

        const loader = screen.queryByRole('status');
        expect(loader).not.toBeInTheDocument();
    })
})