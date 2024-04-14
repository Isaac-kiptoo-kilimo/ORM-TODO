import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import todosRouter from './src/routes/todoRoutes.js';
import userRouter from './src/routes/userRoutes.js';

dotenv.config();
const app=express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const PORT=process.env.PORT || 3000;
app.use('/health',(req,res)=>{
res.json("I am Healthy 👍🤷‍♂️")
});
app.use('/api/v1/todo',todosRouter);
app.use('/api/v1/user',userRouter);

app.listen(PORT,()=>{
    console.log(`This application running on the localhost port ${PORT}`);
})
