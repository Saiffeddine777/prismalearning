import express from "express";
import { deleteOne, findAll, getOne, makeAcow, updateOne } from "../controllers/cow";


const cowRouter = express.Router()

cowRouter.post('/create',makeAcow)
cowRouter.get('/all',findAll)
cowRouter.get('/one/:id',getOne)
cowRouter.put('/update/:id',updateOne)
cowRouter.delete("/delete/:id",deleteOne)


export default cowRouter

