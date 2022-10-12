require('dotenv/config');
const express = require('express');
const app = express();
const userRouter = require('./Routers/userRouter.js')
app.use(express.json());

app.use('/api/user',userRouter);

app.get("/app",()=>{
    console.log("test");
})

// module.exports = app;

const mongoose = require('mongoose');
// const app=require('./app');
mongoose.connect(process.env.MONGODB_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    },()=>{
        console.log("database connected")
    // useCreateIndex: true
})
    // .then(() => console.log("connected to mongoDB"))
    // .catch((err) => console.log(err));


// const port=process.env.PORT ||3000

app.listen(9002,() =>{
    console.log(`app running on port 9002!`)

})