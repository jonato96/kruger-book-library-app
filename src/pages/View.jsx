import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import { useAppContext } from "../store/Store"

const View = () =>{
    const [item, setItem] = useState(null)
    const params = useParams()
    const store = useAppContext()
    useEffect(()=>{
        const book = store.getItem(params.bookId)
        setItem(book)
    },[params, store])
    if(!item){
        return <Layout>Item 404</Layout>
    }
    return(
        <Layout>
            <h2>{item?.title}</h2>
            <div>{item?.cover ? <img src={item.cover} width="150" alt="Portada"/> : ""}</div>
            <div>{item?.author}</div>
            <div>{item?.intro}</div>
            <div>{item?.completed ? "Completed" : "No completed yet"}</div>
            <div>{item?.review}</div>
        </Layout>
    )
}
export default View