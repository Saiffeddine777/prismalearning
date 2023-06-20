import prisma from "../database/script";


  export async function createAcow (name:string,breed:string, category:string,producing:boolean){
    const bagra = await prisma.bagra.create({data:{
        name:name,
        breed :breed,
        category:category,
        producing:producing       
    }})
    return bagra  
 }

  export async function findCows (){
    return await prisma.bagra.findMany()
  }

  export async function findOneCow(id:string){
    return await prisma.bagra.findUnique({where:{
      id:id
    }})
  }

 export async function updateCow(id:string,name:string) {
     const bagra = prisma.bagra.update({
      where:{id:id},
      data:{name:name}
    })
    return bagra
 }

 export async function deleteCow(id:string) {
     return prisma.bagra.delete({where:
      {id:id}
    })
 }

