const express = require ('express');
const mainRouter = express.Router();

const {userSignup , userLogin}=require('../controller/main-controller')

mainRouter.post('/',userLogin)
mainRouter.post('/signup' , userSignup)






module.exports=mainRouter;