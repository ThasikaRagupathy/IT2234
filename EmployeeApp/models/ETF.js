const mongoose = require('mongoose')
const etfSchema = new mongoose.Schema({
    ETFno:{type:String,require:true},
    Balance:{type:Number,require:true},
    interestRate:{type:Number,require:true}
})

const ETF = mongoose.model('ETF',etfSchema)
const ETF1 = new ETF({
    ETFno:'ETF01',
    Balance: 120000,
    interestRate:12
})
//ETF1.save()
module.exports = ETF