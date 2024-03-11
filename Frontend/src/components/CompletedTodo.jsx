

export default function CompletedTodo({todos}){
    let counter = 0;
    for(let i = 0;i<todos.length;i++){
        if(!todos[i].completed){
            counter = counter + 1
        }
    }
    return(
        <div className="p-2">
            <p className="text-xl font-bold	">Completed Todos</p>
            {todos.length == counter ? "No todo completed":todos.map((item)=>(
                (<div key={item._id}>
                    <div>
                        {item.title}
                    </div>
                    <div>
                        Description: {item.description}
                    </div>
                    <div className=" p-2 ">
                        <hr className="border-black"></hr>
                    </div>
                </div>)
            ))}
        </div>
    )
}