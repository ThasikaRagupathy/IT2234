const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    degreeId:{type:String,require:true,ref:"Degree"},
    enroled_courses:[{type:mongoose.Types.ObjectId,ref:'courses'}]
})

const Student = mongoose.model('students',studentSchema)
const st2=new Student({
    _id:'2021IT02',
    name:'Mohammed',
    date_of_birth:'08-10-1996',
    gender:'male',
    degreeId:'FAS2021AMC',
    enroled_courses:['682aab59ab99c46663a29c2b','682aaebee50b1eff5c010e7a']
})

//st2.save()
module.exports = Student