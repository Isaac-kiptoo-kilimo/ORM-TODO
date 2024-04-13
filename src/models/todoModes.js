import {sequelize} from '../config/db.js';
import { DataTypes } from 'sequelize';

const Todo=sequelize.define("todo",{
    task:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    project:{
        type: DataTypes.STRING,
        allowNull: false
    },
    complete:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

Todo.sync().then(()=>{
    console.log(`The model ${Todo} has synced`);
})

export default Todo;