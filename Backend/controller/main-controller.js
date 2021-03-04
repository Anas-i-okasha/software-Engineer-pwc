const mysql = require('../db');
const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');



    const userSignup=  (req , res)=>{

        const {name  , email , password}=req.body
        mysql.query(`SELECT * FROM users WHERE email = ?` , [email] , async (error , result , field)=>{
            if(error){
                console.log('ERR' , error)
            }
        // To check if the user exist in our database or not
            if(result.length>0){
                res.json(" this email is already exist ") 
            } else {(result.length === 0)
                const newUser = req.body;
                newUser.password = await bcrypt.hash(password , parseInt(process.env.SALT) )
        // if the user does't exist in our database will create new account to make him reach our dashboard 
            //  const sql=`INSERT INTO users (name , age , email , password) VALUES (? , ? , ? , ?)`;
             mysql.query( `INSERT INTO users SET ? `,{name:name , email:email , password:newUser.password} , (err , results , field)=>{
                 if(err){
                     console.log(err)
                 } else{
                     res.json('Thank you for create your account') 
                 }  
             })
            }
        })
    }




module.exports={
    userSignup,
}