const express = require('express');
const mongoose = require('mongoose');
const rounter = require('./routers/Taskrouter');


const app = express()

app.use(express.json())


//middleware

app.use((error,req,res,next) => {

    console.log(req.path)
    next()
})

app.use('/api',rounter)

mongoose.connect(process.env.MONG_URL).then(()=>{

    app.listen(4000,()=>{
    console.log('Server running & connected to DB')
})

})


