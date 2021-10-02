import { screen } from "@testing-library/react"
import App from "./App"
import renderWithRouter from "./helpers/renderWithRouter"

test('landing on a bad page', () => {
    renderWithRouter(<App />, {route: '/something-that-does-not-match'})

    expect(screen.getByText(/We can't find the post you're looking for!/i)).toBeInTheDocument()
})