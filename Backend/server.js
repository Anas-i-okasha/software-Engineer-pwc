const express = require('express');
require('dotenv').config()
const mainRouter = require('./routes/main-routes')
const db = require('./db')
const app = express();
// app.use(corse())
app.use(express.json());
app.use(mainRouter);




const port = 3000;

app.listen(port , ()=>{
    console.log('Pwc-task')
})