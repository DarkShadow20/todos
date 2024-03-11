import { useEffect, useState } from "react";

export default function FetchTodo (){
    console.log(1)
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/todos").then(async function(res){
            const todo = await res.json();
            setTodos(todo.todos)
        })
    },[]) 
    return <div className="p-2">
            {todos.length == 0 ? "No todos to display":todos.map(function(todo){
                return(
                    <div>
                        <div>
                            Title: {todo.title}
                        </div>
                        <div>
                            Description: {todo.description}
                        </div>
                        <button className="border-2 border-black rounded p-2">
                            Mark As Done
                        </button>
                        <div className=" p-2 ">
                            <hr className="border-black"></hr>
                        </div>
                    </div>
                )
            })}
        </div>
}