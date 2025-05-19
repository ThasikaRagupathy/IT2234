const mongoose =require('mongoose')
const courseschema= new mongoose.Schema({
    code:{type:String},
    name:{type:String},
    credits:{type:Number},
    description:{type:String}
})

const Course =mongoose.model('courses',courseschema)
const webservice =new Course({
    code:'IT2234',
    name:'Practical for webService',
    credits:3,
    description:'Build a REST API with NodeJS technology'
})
webservice.save()
module.exports=Course