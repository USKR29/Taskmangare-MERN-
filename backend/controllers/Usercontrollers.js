const exp = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Usermodel = require('../model/Usermodel')

const stoken =(_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn: '1h'})
}


const signupUser = async(req, res)=>{

    const {name, email, password} = req.body;

    const hasedpassword = await bcrypt.hash(password,10);

    try{

        const data = await Usermodel.create({name, email, password: hasedpassword})
        res.status(200).json({msg:"User created successfully"})
        
    }catch(err){
        res.status(404).json({msg:err.message})
    }
}

const loginUser = async(req, res)=>{

    const {name, email, password} = req.body;

    try{

        const user = await Usermodel.findOne({email});

        if(!user){
            return res.status(404).json({msg:'User not found'})
        }

        const passMatch = await bcrypt.compare(password,user.password);
        if(!passMatch){
            return res.status(404).json({msg:'Wrong password'})
        }

        //Jwt token to send back to user

        // const newToken = jwt.sign({userId: user._id},{expiresIn: '1h'})

        const newtoken = stoken(user._id)

        res.status(200).json({token: newtoken, name: user.name});
        

    }catch(err){

        res.status(404).json({msg: err.message})

    }
}


module.exports = {signupUser, loginUser}