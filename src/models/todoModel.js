import {sequelize} from '../config/db.js';
import { DataTypes } from 'sequelize';

const Todo=sequelize.define("todo",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    task:{
        type: DataTypes.STRING,
        allowNull: false
        },
    project:{
        type: DataTypes.STRING,
        allowNull: false
    },
    complete:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

Todo.sync({ alter: true }).then(()=>{
    console.log(`The model has synced`);
})

export default Todo;