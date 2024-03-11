import { useState } from "react"


export default function CreateTodo(){
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    return<>
        <div className="p-2">
            <input className="border-2 border-black rounded" type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)}></input>
        </div>
        <div className="p-2">
            <input className="border-2 border-black rounded" type="text" placeholder="description" onChange={(e)=>setDescription(e.target.value)}></input>
        </div>
        <div className="ml-2">
            <button className=" border-2 border-black p-1 rounded" onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body:JSON.stringify({
                        title:title,
                        description:description
                    })
                }).then(async function(res){
                    const json = await res.json()
                    alert("Todo added")
                })
            }}>Create Todo</button>
        </div>
    </>
}