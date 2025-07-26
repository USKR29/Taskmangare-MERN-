const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskschema = new Schema ({
    name:{
        type: String,
        require: true
    },
      description:{
        type: String,
        require: true
    },
      priority:{
        type: String,
        require: true
    },
      duetime:{
        type: String,
        require: true
    },
      status:{
        type: String,
        require: true
    },
      completed:{
        type: Boolean,
        require: true,
    },

},{timestamps:true})

module.exports = mongoose.model('taskmodel',taskschema)