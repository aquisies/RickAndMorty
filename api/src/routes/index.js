/*
Importar los archivos
route: {characters, episodes}
*/

const {Router}= require('express');
const CharactersRoutes=require('./characters');
const EpisodesRoutes=require('./episodes');

const router= Router();

router.use('/character', CharactersRoutes);
router.use('/episode', EpisodesRoutes); 

module.exports= router;