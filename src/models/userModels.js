import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const User=sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    fullName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    age:{
        type:DataTypes.STRING,
        allowNull:true,
        allowNull:true
    },
    employed:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    }
})

User.sync({alter:true}).then(()=>{
    console.log(`This model ${User} has synced`);
})

export default User;