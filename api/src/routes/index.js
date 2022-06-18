const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {routerPokemons}=require("./routerPokemons.js")

router.use("/pokemons", routerPokemons)


module.exports = router;
