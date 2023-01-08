import { useState } from "react"
import { useAppContext } from "../store/Store";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    const store = useAppContext()
    const navigate = useNavigate()

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
                setCompleted(e.target.checked);
                break;
            case "review":
                setReview(value);
                break;
            default:
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        const newBook={
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review
        }
        //To do book registry
        store.createItem(newBook)
        navigate("/")
    }

    function handleOnChangeFile(e) {
        const element = e.target
        var file = element.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function () {          
          setCover(reader.result.toString())
        }
        
    }

    return (
        <Layout>          
            <form onSubmit={handleSubmit}>
                <div>
                    <div>Title</div>
                    <input name="title" onChange={handleChange} value={title} type="text" />
                </div>
                <div>
                    <div>Author</div>
                    <input name="author" onChange={handleChange} value={author} type="text" />
                </div>
                <div>
                    <div>Cover</div>
                    <input name="cover" onChange={handleOnChangeFile}  type="file" />
                    <div>{!!cover ? <img src={cover} width="200" alt="preview"/>:""}</div>
                </div>
                <div>
                    <div>Intro</div>
                    <input name="intro" onChange={handleChange} value={intro} type="text" />
                </div>
                <div>
                    <div>Completed</div>
                    <input name="completed" onChange={handleChange} value={completed} type="checkbox" />
                </div>
                <div>
                    <div>Review</div>
                    <input name="review" onChange={handleChange} value={review} type="text" />
                </div>
                <input type="submit" value="Register Book"/>
            </form>
        </Layout>
    )
}
export default Create