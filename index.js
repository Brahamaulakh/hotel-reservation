import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";




const app = express()
dotenv.config() 

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB.")
  } catch (error) {
throw error 
   } };

   mongoose.connection.on("disconnected",() => {
    console.log("monodb disconnected!")})

    app.use((err,_req,res,_next) => {

      const errorStatus = err.status || 500
      const errorMessage = err.message || "something went wrong"


       return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,

       })


      } )

    app.use(express.json());
    
    app.use("/api/auth", authRoute);   
    app.use("/api/hotel", hotelRoute);   
    app.use("/api/users", usersRoute);   
    app.use("/api/rooms", roomsRoute);   

   


       
     
;  
  

app.listen(8800, ()=>{
    connect()
    console.log("connected to Backend!")
})
