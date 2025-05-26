const mongoose = require('mongoose')
const degreeSchema = new mongoose.Schema({
    _id:{type:String,require:true}, //define id by ourselves
    name:{type:String,require:true},
    department:{type:String,require:true},
    numberofyears:{type:Number,require:true},
    faculty:{type:String}
})

const Degree = mongoose.model('degrees',degreeSchema)
const AMC=new Degree({
    _id:"FAS2021AMC",
    name:"BSc in Computer Science",
    department:"Physical Science",
    numberofyears:4,
    faculty:"Applied Science"
})
//AMC.save()
module.exports = Degree