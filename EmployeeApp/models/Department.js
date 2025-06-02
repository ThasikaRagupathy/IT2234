const mongoose = require('mongoose')
const departmentSchema = new mongoose.Schema({
    _id:{type:String,require:true}, //define id by ourselves
    name:{type:String,require:true},
    department:{type:String,require:true},
    exprerience:{type:Number,require:true},
})

const Department = mongoose.model('department',departmentSchema)
const Eng=new Department({
    _id:"Eng_01",
    name:"Software Engineer",
    department:"ML",
    exprerience:3,
})
//Eng.save()
module.exports = Department