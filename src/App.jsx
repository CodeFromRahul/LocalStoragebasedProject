import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/Todo'
 
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

import './App.css'




function App() {

  const [todo,setTodos]= useState([])
  
    const addTodo=(todo)=>{
      setTodos((prev)=>[{id:Date.now(),...todo,...prev}])
    }

    const updateTodo=(id,todo)=>{
      setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
    }
    
    const deleteTodo=(id)=>{
      setTodos((prev)=>prev.filter((todo)=> todo.id!==id))
    }

    const toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
    }

    
    useEffect(() => {
     const todo =  JSON.parse(localStorage.getItem("todo"))

     if(todo && todo.length>0){
      setTodos(todo)
     }
    }, [])

    useEffect(()=>{
      localStorage.setItem("todo",JSON.stringify(todo))
    },[todo])
    

  return (
    <TodoProvider value={{todo,addTodo,deleteTodo,toggleTodo,updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todo.map((todo)=>(
                          <div key={todo.id}
                          className="w-full">
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
