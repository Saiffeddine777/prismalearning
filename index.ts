import express from "express";
import cors from "cors"
import cowRouter from "./routers/cowRouter";

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api/cows",cowRouter)

app.listen(8000,()=>{
    console.log("connected at 8000")
})