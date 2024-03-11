

export default function CompletedTodo({todos}){
    console.log(todos)
    return(
        <div className="p-2">
            <p className="text-xl font-bold	">Completed Todos</p>
            {todos.map((item)=>(
                item.completed ? (<div key={item._id}>
                    <div>
                        {item.title}
                    </div>
                    <div>
                        Description: {item.description}
                    </div>
                    <div className=" p-2 ">
                        <hr className="border-black"></hr>
                    </div>
                </div>):"No Todo is Completed"
            ))}
        </div>
    )
}