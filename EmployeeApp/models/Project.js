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
const projectSchema = new mongoose.Schema({
    projectcode:{type:String,require:true},
    project_Title:{type:String,require:true},
    project_duration_months:{type:Number,require:true},
    description:{type:String}
})
const Project = mongoose.model('project',projectSchema)
const Ai =new Project({
    projectcode:'pr001',
    project_Title:'Spam Email detector',
    project_duration_months:3,
    description:'Python project aimed at automatically classifying emails as either spam or non-spam (ham) using machine learning techniques'
})

const QA =new Project({
    projectcode:'pr002',
    project_Title:'Quality Assurance',
    project_duration_months:5,
    description:'haigfaflkuagfagylriugskaukfrk'
})

//Ai.save()
//QA.save()
module.exports = Project
