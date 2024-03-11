

export default function FetchTodo ({todos}){
    return <div className="p-2">
            {(todos.length == 0 ? "No todos to display":todos.map(function(todo){
                return(
                    <div key={todo._id || todo.id}>
                        <div className="h1">
                            <h1> {todo.title} </h1>
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
            }))}
        </div>
}