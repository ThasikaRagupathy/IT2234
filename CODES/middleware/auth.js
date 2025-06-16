const User=require('../models/User')
const secretkey="vau.ict@2021"
const jwt=require("jsonwebtoken")

function verifyToken(req,res,next){
    try{
        const token=req.headers.authorization
        if(!token){
            return res.status(403).send("Security Token Not Available!")
        }

        jwt.verify(token.split(" ")[1],secretkey,async(err,decoded)=>{
            const userID=decoded.ID
            const user = await User.findById(userID)
            if(!user || err){
                return res.status(401).send("Invalid Token !")
            }
            next()
        })
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
}

module.exports={verifyToken}