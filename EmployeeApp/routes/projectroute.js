const express = require('express')
const router = express.Router()
const Project = require('../models/Project')
const { default: mongoose } = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results = await Project.find()
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
        const results = await Project.findById(id)
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

router.get('/projectcode/:pid',async(req,res)=>{
    try{
        const pid = req.params.cid
        const results = await Project.find({code:pid})
        const count = results.length
        console.log(count)
        if(results) {
           if(count>0){
                res.status(200).json(results)
           }else{
            res.status(404).send("Sorry, no data found!")
           }
        }else{
            res.status(404).send("Sorry, no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

//insert

router.post('/',async(req,res)=>{
    try{
        const {projectcode,project_Title,project_duration_months,description} = req.body
        if(!projectcode || !project_Title || !project_duration_months || !description) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await Project.create({projectcode,project_Title,project_duration_months,description})
            res.status(200).json(results)
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

//update

router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send("Invalid ID!")
        }
        const uproject = await Project.findById(id)
        const {projectcode,project_Title,project_duration_months,description} = req.body
        if(!projectcode || !project_Title || !project_duration_months || !description) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await ucourse.updateOne({projectcode,project_Title,project_duration_months,description})
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
        const dcourse = await Project.findById(id)
        const results = await dproject.deleteOne(dproject).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

router.delete('/:code', async (req,res)=>{
    try {
        const code = req.params.code
        if(!mongoose.Types.ObjectId.isValid(code)){
            return  res.status(400).send("Invaild ID !")
        }
        const dproject = await Project.findById(projectcode)
        const results = await dproject.deleteOne(dproject).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

module.exports=router