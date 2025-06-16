const express = require('express');
const app =express();
const port=3002;
const mongoose = require('mongoose')
const studentsrt = require('./routes/studentroute')
const borrowrt = require('./routes/borrowroute')
const bookrt = require('./routes/bookroute')
const userrt = require('./routes/userroute')
const dotenv=require('dotenv')
dotenv.config()

app.use(express.json());

app.use('/stu', studentsrt)
app.use('/brw', borrowrt)
app.use('/bk', bookrt)
app.use('/user', userrt)

mongoose.connect('mongodb://localhost:27017/libappDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
