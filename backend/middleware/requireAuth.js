const jwt = require('jsonwebtoken');
const User = require('../model/Usermodel.js');

const requireAuth = async (req,res,next)=>{
    //Find the header has authorization

    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({error:'Authorization is required'})
    }

    const token = authorization.split(' ')[1]

    if (!token){
        return res.status(401).json({error: 'Invalid token'})
    }
    //validate the token

    try{

        const {_id} = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findOne({_id}).select('_id');
        next();
            
    }catch(err){

        return res.status(401).json({error: 'Failed to authenticate the token'})

    }

}

module.exports = requireAuth;