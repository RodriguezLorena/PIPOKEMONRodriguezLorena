const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


const {routerPokemons}=require("./routerPokemons.js")
const {RouterType}=require("./routerTypePokemons")
const {routerPostPokemon}= require("./postRouterPokemons")

router.use("/pokemons", routerPokemons)
router.use("/tipos", RouterType)
router.use("/create", routerPostPokemon) 


module.exports = router;
