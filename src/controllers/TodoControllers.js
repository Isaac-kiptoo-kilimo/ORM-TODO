// import todoData from "../data/data.json" assert { type: "json" };
import Todo from "../models/todoModes.js";

export const getAllTodosController = async(req, res) => {
  try {
    const todos = await Todo.findAll();
    // if (todos.length === 0) {
    //   res.status(404).json("Todos not found");
    // }

    res.json(todos);
  } catch (error) {
    console.error("Error fetching all todos:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTodoController = async(req, res) => {
  try {
    const {task,project} = req.body;

    console.log("body",req.body);
    
    // const highestId = todoData.reduce((maxId, todo) => Math.max(maxId, todo.id),
    //   0
    //  );

     const newTodo =await Todo.create({
       task: task,
       project: project
        });
    //  todoData.push(newTodo);
     res.status(201).json({message:"Todo created successfully"});

  } catch (error) {
    console.error("Error creating todo:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTodoController=(req,res)=>{
try {
  const {task,project}=req.body;
  const {id}=req.params
const todoToUpdate=todoData.find((todo)=>Number(id)===todo.id)
console.log("todoToUpdate",todoToUpdate);
if(!todoToUpdate){
  return res.status(404).json({ message: "Todo not found" });
}
todoToUpdate.task = task;
todoToUpdate.project = project;

  res.json({message:"Todo updated successfully"})
} catch (error) {
  console.error("Error updating todo:", error);
  return res.status(500).json({ error: "Internal Server Error" });
}
}

export const updateCompleteController=(req,res)=>{
  try {
    const {id}=req.params;
    const isComplete=true
    const existingTodo=todoData.find((todo)=>Number(id)===todo.id)
    if(!existingTodo){
      return res.status(404).json({ message: "Todo not found" });
    }
    existingTodo.complete=isComplete;
    res.json({message:"complete updated successfully"})

  } catch (error) {
    console.error("Error updating todo:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getSingleTodoController=(req,res)=>{
  try {
    const {id}=req.params
    console.log("Requested ID:", id);
    const singleTodo=todoData.find((todo)=>Number(id)===todo.id)
    console.log(singleTodo);
    if(!singleTodo){
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(singleTodo)
  } catch (error) {
    console.error("Error fetching single todo:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
export const removeTodoController = (req, res) => {
  try {
    const { id } = req.params;

    const updatedTodoData = todoData.filter((todo) => Number(id) !== todo.id);
    console.log(updatedTodoData);
    if (updatedTodoData.length === todoData.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    // todoData = updatedTodoData;

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};



// if(task!==undefined && task===""){
  //   task:todoData.task
  // }