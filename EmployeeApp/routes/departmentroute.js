const express = require('express')
const router = express.Router()
const Department = require('../models/Department')
const { default: mongoose } = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Department.find()
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
        const Did = req.params.id
        const results = await Department.findById(id)
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
        const {_id,name,department,experience} = req.body
        if(!_id || !name || !department || !experience) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await Department.create({_id,name,department,experience})
            res.status(200).json(results)
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const Did = req.params.id
        
        const udepartment = await Department.findById(id)
        const {_id,name,department,experience} = req.body
        if(!_id || !name || !department || !experience) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await udepartment.updateOne({_id,name,department,experience})
            res.status(200).json(results)
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        const id = req.params.Did
        if(!mongoose.Types.ObjectId.isValid(id)){
            return  res.status(400).send("Invaild ID !")
        }
        const ddepartment = await Department.findById(id)
        const results = await ddepartment.deleteOne(ddepartment).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

module.exports=router