import { render, screen } from "@testing-library/react";
import Loader from "@/components/shared-ui/Loader";
import '@testing-library/jest-dom'

describe('Loader', () => {
    it('renders a div if show is true', () => {
        render(<Loader show={true} />);

        const loader = screen.getByRole('status');
        expect(loader).toBeInTheDocument();
    });
})