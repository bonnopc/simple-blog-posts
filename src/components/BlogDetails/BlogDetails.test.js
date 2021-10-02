import { fireEvent, render, screen, within } from "@testing-library/react"
import BlogDetails from "."
import App from "../../App"
import renderWithRouter from "../../helpers/renderWithRouter"
import Dataset from "../../assets/data.json"

test("shows error for invalid post id", () => {
    renderWithRouter(<BlogDetails/>, { route: "/anything-except-a-valid-id" })

    expect(screen.getByText(/can't find/i)).toBeInTheDocument()
})

test("back button navigates to home", async () => {
    renderWithRouter(<App/>, { route: "/any-id" })

    const button = screen.getByRole("button", {
        name: /back-button/i,
    })

    fireEvent.click(button)
    expect(screen.getByText("My Blogs")).toBeInTheDocument()
})

test("blog header is shown", () => {
    const firstBlogItem = Dataset[0]

    render(<BlogDetails match={{ params: { id: firstBlogItem.id } }} />)

    const heading = screen.getByRole("heading", {
        name: /blog-header/i,
    })

    const { getByText } = within(heading)

    expect(getByText(firstBlogItem.title)).toBeInTheDocument()
})