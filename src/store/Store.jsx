import {createContext, useContext, useEffect, useState} from 'react'

const AppContext = createContext({
    item: [],
    createItem: (item)=>{},
    getItems: (id)=>{},
    updateItem: (item)=>{}
})

const Store = ({children}) =>{
    const [items, setItems] = useState([])
    function createItem(item){
        const temp = [...items]
        temp.push(temp)
    }
    function getItem(id) {
        const item = items.find((item) => item.id === id);
        return item;
    }
    function updateItem(item) {
        const index = items.findIndex((i) => i.id === item.id);
        const temp = [...items];
        temp[index] = { ...item };
        return true;
    }
    
    return (
        <AppContext.Provider
            value={{
                items,
                createItem,
                getItem,
                updateItem,
            }}>
            {children}
        </AppContext.Provider>
    )
}
export default Store

export function useAppContext() {
    return useContext(AppContext);
}