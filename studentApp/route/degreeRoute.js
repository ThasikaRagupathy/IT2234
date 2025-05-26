const express = require('express')
const router = express.Router()
const Degree = require('../models/Degree')
const { default: mongoose } = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Degree.find()
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
        const results = await Degree.findById(id)
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
        const {_id,name,department,numberofyears,faculty} = req.body
        if(!_id || !name || !department || !numberofyears || !faculty) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await Degree.create({_id,name,department,numberofyears,faculty})
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
        
        const udegree = await Course.findById(id)
        const {_id,name,department,numberofyears,faculty} = req.body
        if(!_id || !name || !department || !numberofyears || !faculty) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await udegree.updateOne({_id,name,department,numberofyears,faculty})
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
        const ddegree = await Degree.findById(id)
        const results = await ddegree.deleteOne(ddegree).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

module.exports=router