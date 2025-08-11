require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const rounter = require('./routers/Taskrouter');
const userRouter = require('./routers/Userrouter');
const req = require('express/lib/request');


const app = express()

app.use(express.json())


//middleware

app.use((error,req,res,next) => {

    console.log(req)
    next()
})

app.use('/api',rounter);
app.use('/user', userRouter);

mongoose.connect('mongodb://127.0.0.1:27017/').then(()=>{

    app.listen(4000,()=>{
    console.log('Server running & connected to DB')
})

})


