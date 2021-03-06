const mysql = require('../db');
const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');


/* Create account fistly we need to check if the user already have account or not     */
    const userSignup= (req , res)=>{
        const {user_name  , email , password}=req.body
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
             mysql.query( `INSERT INTO users SET ? `,{user_name:user_name , email:email , password:newUser.password} , (err , results , field)=>{
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
   /* send the complaint from user to admin */
    const userComplaint=(req , res)=>{
        const newMessage = req.body
        const sql = `INSERT INTO messages (message_name , message_subject , Phone , message) VALUES (?,?,?,?)`;
        mysql.query(sql,[newMessage.message_name , newMessage.message_subject, newMessage.Phone , newMessage.message , newMessage.user_id] ,(err,result,field)=>{
            if(err){
                console.log('ERR:', err)

            }else{
                res.json("the message added success")
                console.log(req.body)
            }
        } )

    }

    const getAllComplaint=(req , res)=>{
        const sql = `SELECT * FROM messages`;
        mysql.query(sql , (err, result , field)=>{
            if(err){
                console.log("err:",err)

            }else{
                res.json(result)
            }
        })

    }

    const getMyMessage=(req , res)=>{
    //    const {user_id}=req.body;
    //    const sql = `SELECT * from m.messages inner join m.user on m.user_id=users.user_id where m.user_id=${user_id} `;
    //    mysql.query(sql , (err , result , field)=>{
    //        if(err){
    //            console.log(err)
    //        }else{
    //            res.json(result)
    //        }
    //    })
    }
module.exports={
    userSignup,
    userLogin,
    userComplaint,
    getAllComplaint,
    getMyMessage
}

