const express = require('express')
const router = express.Router()
const Student = require('../models/student')
const { default: mongoose } = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Student.find().populate("degreeId").populate("enroled_courses")
        if(results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        const results = await Student.findById(id)
        if(results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.post('/',async(req,res)=>{
    try{
        const {_id,name,date_of_birth,gender,degreeId,courses} = req.body
        if(!_id || !name || !date_of_birth || !gender || !degreeId || !courses) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await Student.create({_id,name,date_of_birth,gender,degreeId,courses})
            res.status(200).json(results)
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        
        const ustudent = await Student.findById(id)
        const {_id,name,date_of_birth,gender,degreeId,courses} = req.body
        if(!_id || !name || !date_of_birth || !gender || !degreeId || !courses) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await ustudent.updateOne({_id,name,date_of_birth,gender,degreeId,courses})
            res.status(200).json(results)
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return  res.status(400).send("Invaild ID !")
        }
        const dstudent = await Student.findById(id)
        const results = await dstudent.deleteOne(dstudent).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})


module.exports=router