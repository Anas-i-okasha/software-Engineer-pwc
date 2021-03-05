const express = require ('express');
const mainRouter = express.Router();

const {userSignup , userLogin , userComplaint}=require('../controller/main-controller')
// Api for user login 
mainRouter.post('/',userLogin)
// Api for user register
mainRouter.post('/signup' , userSignup)
// Api for user complaint
mainRouter.post('/dashboard',userComplaint)






module.exports=mainRouter;