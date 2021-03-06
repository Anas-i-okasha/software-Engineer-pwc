const express = require ('express');
const mainRouter = express.Router();

const {userSignup , userLogin , userComplaint , getAllComplaint , getMyMessage}=require('../controller/main-controller')
// Api for user login 
mainRouter.post('/',userLogin)
// Api for user register
mainRouter.post('/signup' , userSignup)
// Api for user complaint
mainRouter.post('/dashboard',userComplaint)

//Api for admin 
mainRouter.get('/admin', getAllComplaint)

mainRouter.get ('/prof' , getMyMessage)






module.exports=mainRouter;