const express = require('express');
const dotenv= require("dotenv").config();
const {dbConnect}= require("./config/dbConnect");
const authRoutes = require('./routes/authRoute')
const userRoutes = require('./routes/userRoute')

dbConnect();

const app=express();

//midllewares
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use('/api/users',userRoutes);

// Routes 
const port =process.env.PORT
app.listen(port, ()=>console.log(`listening on prot ${port}`))