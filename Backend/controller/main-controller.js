const mysql = require('../db');
const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');


/* Create account fistly we need to check if the user already have account or not     */
    const userSignup= (req , res)=>{
        const {name  , email , password}=req.body
        mysql.query(`SELECT * FROM users WHERE email = ?` , [email] , async (error , result , field)=>{
            if(error){
                console.log('ERR' , error)
            }
            if(result.length>0){
                res.json(" this email is already exist ") 
            } else {(result.length === 0)
                const newUser = req.body;
                newUser.password = await bcrypt.hash(password , parseInt(process.env.SALT) )
        // if the user does't exist in our database will create new account to make him reach our dashboard 
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

    /*  the user login and check if the email and hash password is match redirected to dashbord */
    const userLogin = async (req , res)=>{
        try{
            const {email , password}=req.body
    
            mysql.query(`SELECT * FROM users WHERE email = ?` , [email] , async (error , result , field)=>{
                if(error){
                    console.log('Err', error)
                }
                if(result.length===0){
                    res.status(404).json({massege:'the user is not found '})
                }else{
                    if(await bcrypt.compare(password , result[0].password)){
                        res.json('login successful')
                        
                    }else{
                        console.log('invalid username and password')
                        res.status(404).json({massege:'invalid username or password'})
                    }
                }
            })
               /*  if there are error  */
        } catch (err){
             console.log('ERR',err)
        }
    
        
    }


module.exports={
    userSignup,
    userLogin
}