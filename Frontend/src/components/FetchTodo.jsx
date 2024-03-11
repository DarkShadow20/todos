

export default function FetchTodo ({todos,setCompletedTodos,setTodos}){
    let counter = 0;
    for(let i = 0;i<todos.length;i++){
        if(todos[i].completed){
            counter = counter + 1
        }
    }
    return <div className="p-2">
        <p className="font-bold text-xl">To be Completed</p>
            {((todos.length == 0 || counter == todos.length) ? "No todos to display":todos.map(function(todo){
                return(
                todo.completed ? "" :<div>
                    <div key={todo._id }>
                        <div className="h1">
                            <h1> {todo.title} </h1>
                        </div>
                        <div>
                            Description: {todo.description}
                        </div>
                        <button className="border-2 border-black rounded p-2" onClick={()=>{
                            fetch("http://localhost:3000/completed",{
                                method:'PUT',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                                body:JSON.stringify({
                                    id:todo._id
                                })
                            }).then(async function(res){
                                const json = await res.json();
                                const todoFiltered = todos.filter(item=>item._id !== json.data._id)
                                setCompletedTodos((prev)=>[...prev,json.data])
                                setTodos(todoFiltered)
                            })
                        }}>
                            Mark As Done
                        </button>
                        <div className=" p-2 ">
                            <hr className="border-black"></hr>
                        </div>
                    </div>
                    </div>
                )
            }))}
        </div>
}