import { createAcow, deleteCow, findCows, findOneCow, updateCow } from "../models/cow"



  export function makeAcow(req:any,res:any){
    const {name,breed,category,producing} = req.body
      createAcow(name,breed,category,producing)
      .then((bagra)=>{
        res.status(200).json(bagra)
        console.log(bagra)
      })
      .catch((err)=>{
        res.status(500).json(err)
        console.log(err)
      })
}

  export function findAll(req:any,res:any){
    findCows()
    .then((bgar)=>{
      res.status(200).json(bgar)
      console.log(bgar)
    })
    .catch(err=>{
      res.status(500).json(err)
      console.log(err)
    })
  }

  export function getOne(req:any ,res:any){
    const id = req.params.id
    findOneCow(id)
    .then((bagra)=>{
      res.status(200).json(bagra)
      console.log(bagra)
    })
    .catch((err)=>{
      res.status(500).json(err)
      console.log(err)   
    })
  }

  export function updateOne(req:any,res:any){
    const {id} = req.params
    const {name} = req.body
    updateCow(id,name)
    .then(bagra=>{
      res.status(200).json(bagra)
      console.log(bagra)
    })
    .catch((err)=>{
      res.status(500).json(err)
      console.log(err)
    })  
  }

  export function deleteOne(req:any,res:any){
     const {id} = req.params
     deleteCow(id)
     .then((bagra)=>{
      res.status(200).json(bagra)
     })
     .catch((err)=>{
      res.status(500).json(err)
      console.log(err)
     })
  }
 
  

