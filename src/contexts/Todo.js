
import { createContext,useContext } from "react"

export const TodoContext=createContext({
    Todos:[{
        id:1,
        todo:"Todo msg",
        completed:false
    }
],

addTodo:(todo)=>{},
updateTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleTodo:(id)=>{}
})




       
export const createTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider