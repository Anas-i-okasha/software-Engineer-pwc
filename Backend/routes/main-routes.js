const express = require ('express');
const mainRouter = express.Router();

const {userSignup}=require('../controller/main-controller')

mainRouter.post('/signup' , userSignup)






module.exports=mainRouter;