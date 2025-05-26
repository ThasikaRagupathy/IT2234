const express =require('express');
const app =express();
const port =3002;
const mongoose =require('mongoose')
const coursert=require('./routes/courseRoute')
const degreert=require('./routes/degreeRoute')
const studentrt=require('./routes/studentRoute')

app.use(express.json())
app.use('/courses',coursert)
app.use('/degrees',degreert)
app.use('/students',studentrt)
mongoose.connect('mongodb://localhost:27017/studentDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
