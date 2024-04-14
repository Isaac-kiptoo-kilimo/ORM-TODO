import {Router} from 'express';
import { createUserController, getAllUsersController, getSingleUsetController, removeUserController, updateEmployedStatusController, updateUserController } from '../controllers/userControllers.js';
const userRouter=Router();

userRouter.get('/users',getAllUsersController);
userRouter.post('/users',createUserController);
userRouter.put('/users/update/:id',updateUserController);
userRouter.patch('/users/patch/:id',updateEmployedStatusController);
userRouter.get('/users/single/:id',getSingleUsetController);
userRouter.delete('/users/delete/:id',removeUserController);

export default userRouter;