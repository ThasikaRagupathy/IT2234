const express = require('express')
const router = express.Router()
const { default: mongoose } = require('mongoose')
const Employee = require('../models/Employee')

router.get('/',async(req,res)=>{
    try{
        const results = await Employee.find().populate("enrolled_projects")
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
        const results = await Employee.findById(id)
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
        const {_id,name,date_of_birth,gender,email,job,departmentID,salary} = req.body
        if(!_id || !name || !date_of_birth || !gender || !email || !job || !departmentID || salary) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await Employee.create({_id,name,date_of_birth,gender,email,job,departmentID,salary})
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
        
        const uemployee = await Employee.findById(id)
        const {_id,name,date_of_birth,gender,email,job,departmentID,salary} = req.body
        if(!_id || !name || !date_of_birth || !gender || !email || !job || !departmentID || salary) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await ustudent.updateOne({_id,name,date_of_birth,gender,email,job,departmentID,salary})
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
        const demployee = await Employee.findById(id)
        const results = await demployee.deleteOne(demployee).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})


module.exports=router