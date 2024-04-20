require('dotenv').config();
const express = require("express");
const authRouter = require("./router/auth-route")
const taskRouter = require("./router/task-router")
const mongoose = require("mongoose")

const app = express();
app.use(express.json())

//routers
app.use('/api', authRouter.router)
app.use('/api', taskRouter.router)

//connect DB and Start Server
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(8000, () => {
        console.log(`Server Running on 8000 PORT`);
    })
})

