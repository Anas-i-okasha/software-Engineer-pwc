const express = require ('express');
const mainRouter = express.Router();

const {userSignup , userLogin}=require('../controller/main-controller')
// Api for user login 
mainRouter.post('/',userLogin)
// Api for user register
mainRouter.post('/signup' , userSignup)






module.exports=mainRouter;