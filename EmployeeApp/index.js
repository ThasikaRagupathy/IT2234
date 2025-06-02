const express = require('express');
const app = express();
const port = 3002;
const mongoose = require('mongoose')
const departmentrt = require('./routes/departmentroute')
const employeert = require('./routes/employeeroute')
const etfrt = require('./routes/etfroute')
const projectrt = require('./routes/projectroute')

 app.use(express.json())
 app.use('/Department',departmentrt)
 app.use('/Employee',employeert)
 app.use('/ETF',etfrt)
 app.use('/Project',projectrt)

mongoose.connect('mongodb://localhost:27017/EmployeeDB').then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.error(error);
})


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})