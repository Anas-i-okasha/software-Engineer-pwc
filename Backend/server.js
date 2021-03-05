// Run the server using Express.js
const express = require('express');
require('dotenv').config()
const mainRouter = require('./routes/main-routes')
const db = require('./db')
const app = express();
// app.use(corse())

app.use(express.json());   // to handle the requiste from frontend 
app.use(mainRouter);





const port = 3000;
app.listen(port , ()=>{
    console.log('Pwc-task')
})