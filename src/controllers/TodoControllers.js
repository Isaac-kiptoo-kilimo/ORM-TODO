// import todoData from "../data/data.json" assert { type: "json" };
import Todo from "../models/todoModel.js";

export const getAllTodosController = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    if (!todos || todos.length === 0) {
      return res.status(404).json("Todos not found");
    }
    return res.json(todos);
  } catch (error) {
    console.error("Error fetching all todos:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export const createTodoController = async (req, res) => {
  try {
    const { task, project } = req.body;

    console.log("body", req.body);

    const newTodo = await Todo.create({
      task: task,
      project: project,
    });
    res.status(201).json({ message: "Todo created successfully" });
  } catch (error) {
    console.error("Error creating todo:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTodoController = async(req, res) => {
  try {
    const { task, project } = req.body;
    const { id } = req.params;
    const existingTodo=await Todo.findOne({where:{id:id}})
    if (!existingTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    const todoToUpdate =await Todo.update(
      {
        task: task,
        project: project,
      },
      {
        where: {
          id: id,
        },
      }
    );
 
    res.json({ message: "Todo updated successfully" });
  } catch (error) {
    console.error("Error updating todo:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateCompleteController =async(req, res) => {
  try {
    const { id } = req.params;
    const existingTodo=await Todo.findOne({where:{id:id}})
    if (!existingTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    const updateTodo =await Todo.update(
      { complete: true },
      {
        where: {
          id: id,
        },
      }
    );
   
    res.json({ message: "complete updated successfully" });
  } catch (error) {
    console.error("Error updating todo:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getSingleTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    const singleTodo = await Todo.findOne({ where: { id: id } });
    console.log(singleTodo);
    if (!singleTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(singleTodo);
  } catch (error) {
    console.error("Error fetching single todo:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const removeTodoController =async(req, res) => {
  try {
    const { id } = req.params;
    const existingTodo=await Todo.findOne({where:{id:id}})
    if (!existingTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    await Todo.destroy({where:{id:id}})
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
