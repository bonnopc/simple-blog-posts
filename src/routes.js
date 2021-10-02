import BlogDetails from "./components/BlogDetails"
import Blogs from "./components/Blogs"

const routes = [
    {
        title: "Home",
        path: '/',
        exact: true,
        component: Blogs
    },
    {
        title: "Home",
        path: '/:id',
        exact: true,
        component: BlogDetails
    }
]

export default routes