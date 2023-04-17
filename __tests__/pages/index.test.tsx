import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'

beforeEach(() => {
  render(<Home />)
})

describe('Home', () => {
  
  it('renders a heading', () => {

    const heading = screen.getByRole('banner')

    expect(heading).toBeInTheDocument()
  });

  const sections: string[] = ["Accounting you can count on", "Why Leslie's Accounting Services", "About Us", "Services", "Pricing", "Reviews"]

  for (let i = 0; i < sections.length; i++) {
    it(`renders ${sections[i]} section`, () => {
      let section = screen.getByRole("heading", {name: sections[i]});

      expect(section).toBeInTheDocument();
    })
  }

  it('renders a footer', () => {
    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument();
  })
})