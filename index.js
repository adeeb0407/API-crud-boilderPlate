import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import MainRouters from "./routers/main.js"


const app = express()
dotenv.config()

app.use(express.json({limit : "30mb", extended : true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/rest', MainRouters)

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(process.env.PORT, ()=> console.log(`listening on port ${process.env.PORT}`)))
.catch(err => console.error(err))