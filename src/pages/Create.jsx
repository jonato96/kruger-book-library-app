import { useState } from "react"

const Create = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        switch (name) {
            case "title":
                setTitle(value);
                break;
            case "author":
                setAuthor(value);
                break;
            case "intro":
                setIntro(value);
                break;
            case "completed":
                setCompleted(value);
                break;
            case "review":
                setReview(value);
                break;
        }
    }
    return (
        <div>
            <form>
                <div>
                    <div>Title</div>
                    <input name="title" onChange={handleChange} value={title} type="text" />
                </div>
            </form>
        </div>
    )
}
export default Create