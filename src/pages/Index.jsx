import {useAppContext} from "../store/Store"
import Layout from "../components/Layout";
import Book from "../components/Book";

const Index = () =>{
    const store = useAppContext();
    return(
        <Layout>            
            {store.items.map((item) => (
                <Book key={item.id} item={item}/>
            ))}
        </Layout>
    )
}
export default Index