import { useEffect, useState } from "react"
import findItemById from "../../helpers/findItemById"
import styles from "./BlogDetails.module.css"
import Dataset from "../../assets/data.json"

export default function BlogDetails({
    history, match
}){
    const [blogPost, setblogPost] = useState(null)

    useEffect(() => {
        if(match?.params?.id){
            const post = findItemById(match.params.id,Dataset)

            if(post) setblogPost(post)
        }
    }, [match?.params?.id])

    const goBackToHome = () => {
        history.push("/")
    }

    return (
        <div className={styles.root}>
            <button
                className={styles.goBackBtn}
                onClick={goBackToHome}
                aria-label="back-button"
            >
                Go back to Home
            </button>
            {
                !blogPost ?
                <h3>We can't find the post you're looking for!</h3> :
                <>
                    <h1 aria-label="blog-header">{blogPost.title} </h1>
                    <p>{blogPost.description}</p>
                </>
            }
        </div>
    )
}