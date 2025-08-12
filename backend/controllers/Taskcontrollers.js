
const { default: mongoose } = require('mongoose')
const taskmod = require('../model/Taskmodel.js')


const createPost = async(req,res)=>{
     const{name,description,priority,duetime,status, completed}=req.body
        try{
            const user_id = req.user._id
            const data = await taskmod.create({name, description, priority, duetime, status, completed, user_id})
            res.status(200).json(data)
        }catch(err){
    
            res.status(404).json({msg:err.message})
    
        }
}

//to fetch all posts

const getallPosts =async(req,res)=>{

    const user_id = req.user._id;

    try{
        const data = await taskmod.find({user_id}).sort({createdAt:-1})
        res.status(200).json(data)
    }catch(err){

        res.status(404).json({msg:'Unable to fetch'})
    }

}

const updateTask =async(req, res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:'Not valid ID'})
    }

    const data = await taskmod.findByIdAndUpdate({_id:id},{
        ...req.body
    })

    if(!data){
        return res.status(404).json({error:'Content not availble'})
    }
    res.status(200).json(data)
}

//To delete task 

const deleteTask =async(req,res)=>{

    const {id} = req.params

    const data = await taskmod.findByIdAndDelete({_id:id})

    if(!data){
        return res.status(404).json({error:'Content not availble'})
    }

    res.status(200).json(data)

}


module.exports = {createPost, getallPosts, updateTask, deleteTask}