const express = require('express');
const dotenv= require("dotenv").config();
const {dbConnect}= require("./config/dbConnect");
const authRoutes = require('./routes/authRoute')
dbConnect();

const app=express();

//midllewares
app.use(express.json());
app.use("/api/auth",authRoutes);

// Routes 
const port =process.env.PORT
app.listen(port, ()=>console.log(`listening on prot ${port}`))