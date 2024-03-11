const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://kunal8011:Upes2024@cluster0.7enskgz.mongodb.net/todos");


const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo
}

