

export default function FetchTodo ({todos}){
    return <div className="p-2">
            {(todos.length == 0 ? "No todos to display":todos.map(function(todo){
                return(
                    <div key={todo._id }>
                        <div className="h1">
                            <h1> {todo.title} </h1>
                        </div>
                        <div>
                            Description: {todo.description}
                        </div>
                        <button className="border-2 border-black rounded p-2" onClick={()=>{
                            console.log(todo._id || todo.id)
                            fetch("http://localhost:3000/completed"),{
                                method:'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                            }
                        }}>
                            Mark As Done
                        </button>
                        <div className=" p-2 ">
                            <hr className="border-black"></hr>
                        </div>
                    </div>
                )
            }))}
        </div>
}