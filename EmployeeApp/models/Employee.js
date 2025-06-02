const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    email:{type:String},
    job:{type:String},
    departmentID:{type:String},
    salary:{type:Number},

    enrolled_projects:[{type:String,ref:'project',require:true}]
    
})

const Employee = mongoose.model('employee',employeeSchema)
const emp1=new Employee({
    _id:'Emp001',
    name:'Amali',
    date_of_birth:'08-10-1998',
    gender:'Female',
    email:'amali12@gmail.com',
    job:'software Engineer',
    departmentID:'Eng001',
    salary:50000,
    enrolled_projects:['pr001','pr002']

})

//emp1.save()
module.exports = Employee