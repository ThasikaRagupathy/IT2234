/*const mongoose =require('mongoose')
const courseSchema= new mongoose.Schema({
    code:{type:String},
    name:{type:String},
    credits:{type:Number},
    description:{type:String}
})

const Course =mongoose.model('courses',courseSchema)
const webservice =new Course({
    code:'IT2234',
    name:'Practival for webService',
    credits:3,
    description:'Build a REST API with NodeJS technology'
})
webservice.save()
module.exports=Course
*/
const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    code:{type:String,require:true},
    name:{type:String,require:true},
    credits:{type:Number,require:true},
    description:{type:String}
})

const Course = mongoose.model('courses',courseSchema)
module.exports = Course
