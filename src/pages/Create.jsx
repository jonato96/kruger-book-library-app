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

    const inputStyles = {
        formContainer: {
          width: "400px",
          margin: "0 auto",
        },
        container: {
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          margin: "15px 0",
        },
        title: {
          fontSize: "16px",
          textAlign: "left",
          color: "white"
        },
        input: {
          padding: "10px",
          borderRadius: "5px",
          fontSize: "16px",
        },
      }

      const buttonStyle={
        padding: "15px 20px",
        minWidth: "200px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#1e9638",
        color: "white",
        fontWeigth: "bolder",
        fontSize: "18px",
      }

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
            <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Title</div>
                    <input name="title" onChange={handleChange} value={title} type="text" style={inputStyles.input}/>
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Author</div>
                    <input name="author" onChange={handleChange} value={author} type="text" style={inputStyles.input}/>
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Cover</div>
                    <input name="cover" onChange={handleOnChangeFile}  type="file" />
                    <div>{!!cover ? <img src={cover} width="200" alt="preview"/>:""}</div>
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Intro</div>
                    <input name="intro" onChange={handleChange} value={intro} type="text" style={inputStyles.input}/>
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Completed</div>
                    <input name="completed" onChange={handleChange} value={completed} type="checkbox" style={inputStyles.input}/>
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Review</div>
                    <input name="review" onChange={handleChange} value={review} type="text" style={inputStyles.input}/>
                </div>
                <input type="submit" value="Register Book" style={buttonStyle}/>
            </form>
        </Layout>
    )
}
export default Create