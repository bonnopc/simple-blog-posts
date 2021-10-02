import Dataset from "../../assets/data.json"
import truncateTexts from "../../helpers/truncateTexts"
import styles from "./Blogs.module.css"

const BlogSummary = ({ title, description, onClick }) => (
    <li 
        className={styles.item}
        onClick={onClick}
    >
        <h4>{title}</h4>
        <div>{truncateTexts(description)}</div>
    </li>
)

export default function Blogs({ history }){
    const handleClickItem = (id) => {
        history.push(`/${id}`)
    }

    return (
        <div className={styles.container}>
            <h1>My Blogs</h1>

            <ul aria-label="blogs">
                {Dataset.map((data) => (
                    <BlogSummary
                        key={data.id}
                        onClick={() => handleClickItem(data.id)}
                        {...data}
                    />
                ))}
            </ul>
        </div>
    )
}