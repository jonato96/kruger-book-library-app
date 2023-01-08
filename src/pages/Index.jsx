import {useAppContext} from "../store/Store"
import Layout from "../components/Layout";

const Index = () =>{
    const store = useAppContext();
    return(
        <Layout>            
            {store.items.map((item) => (
                <div>{item.title}</div>
            ))}
        </Layout>
    )
}
export default Index