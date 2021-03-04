const express = require('express');
const app = express();
require('dotenv').config()
const db = require('./db')




const port = 3000;

app.listen(port , ()=>{
    console.log('Pwc-task')
})