import { screen, render } from "@testing-library/react";
import SocialLink from "@/components/shared-ui/SocialLink";
import '@testing-library/jest-dom'

describe('Social Link', () => {
    it("renders", () => {
        render(<SocialLink />);

        const links = screen.getByTestId('links');
        expect(links).toBeInTheDocument();
    })
})