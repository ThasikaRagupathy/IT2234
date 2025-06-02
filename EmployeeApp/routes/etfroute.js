const express = require('express')
const router = express.Router()
const { default: mongoose } = require('mongoose')
const ETF = require('../models/ETF')

router.get('/',async(req,res)=>{
    try{
        const results = await ETF.find()
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
        const results = await ETF.findById(id)
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
        const {ETFno,Balance,interestRate} = req.body
        if(!ETFno || !Balance || !interestRate) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await ETF.create({ETFno,Balance,interestRate})
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
        
        const uetf = await ETF.findById(id)
        const {ETFno,Balance,interestRate} = req.body
        if(!ETFno || !Balance || !interestRate) {
            res.status(400).send("Please provide data to the required fileds!")
        }else{
            const results = await uetf.updateOne({ETFno,Balance,interestRate})
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
        const detf = await ETF.findById(id)
        const results = await detf.deleteOne(detf).catch(
            (error)=>{ return res.status(500).json(error)}
        )
        res.status(200).json(results)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

module.exports=router