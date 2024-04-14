import {Router} from 'express';
import { createTodoController, getAllTodosController, getSingleTodoController, removeTodoController, updateCompleteController, updateTodoController } from '../controllers/todoControllers.js';
const todosRouter=Router();

todosRouter.get('/todos',getAllTodosController);
todosRouter.post('/todos',createTodoController);
todosRouter.put('/todos/update/:id',updateTodoController);
todosRouter.patch('/todos/patch/:id',updateCompleteController);
todosRouter.get('/todos/single/:id',getSingleTodoController);
todosRouter.delete('/todos/delete/:id',removeTodoController);

export default todosRouter;