import { render, screen, within } from "@testing-library/react"
import Blogs from "."
import Dataset from "../../assets/data.json"

test("renders blog page", () => {
    render(<Blogs/>);
    expect(screen.getByText("My Blogs")).toBeInTheDocument();
})

test("number of list items matches with dataset", async () => {
    render(<Blogs/>);

    const list = screen.getByRole("list", {
        name: /blogs/i,
    })

    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")

    expect(items.length).toBe(Dataset.length)
})

