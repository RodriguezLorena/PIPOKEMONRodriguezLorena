const axios= require("axios")
const {Router}= require("express")
const {Type}=require("../db")

const RouterType=Router()


RouterType.get("/", async (req, res)=>{
    try {
        const tipoDb= await Type.findAll()
        if(!tipoDb.length){
            let tipoEnApi= await axios("https://pokeapi.co/api/v2/type")
            tipoEnApi= await tipoEnApi.data.results.map((ele)=>{
                return {name: ele.name}
            })

            await Type.bulkCreate(tipoEnApi)
            const segundaLlamada= await Type.findAll()
            return res.status(200).send(segundaLlamada)

        }
        res.status(200).send(tipoDb)
        
    } catch (error) {
        console.log(error)
    }
})

module.exports={RouterType}
