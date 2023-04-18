import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'

const reviews = [
    {
        id: 1,
        imageUrl: "bobthomas.jpeg",
        fName: "Bob",
        lName: "Thomas",
        rating: 4.5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis."
    },
    {
        id: 2,
        imageUrl: "actresses-kirsten-dunst-wallpaper-preview.jpeg",
        fName: "Jane",
        lName: "Watson",
        rating: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        imageUrl: "Tobey-Maguire.webp",
        fName: "Peter",
        lName: "Parker",
        rating: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget arcu dictum varius duis at consectetur lorem donec."
    }
]
const prices = [
  {
        service: {
            name: "Monthly Bookkeeping Services",
            details: "Pricing depends on the size of the company and the amount of work"
        },
        pricing: {
            price: 150,
            details: "and up"
        }
    },
    {
        service: {
            name: "4-hour Quick books training",
            details: "one on one or group"
        },
        pricing: {
            price: 333,
            details: null
        }
    },
    {
        service: {
            "name": "Form 1040 Individuals",
            "details": null
        },
        pricing: {
            price: 150,
            details: "and up"
        }
    }
]
const props = {
  reviews: prices,
  pricing: reviews
}

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