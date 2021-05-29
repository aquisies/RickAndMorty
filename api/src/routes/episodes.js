const {Router}= require('express');
const episodeController = require('../controllers/episodes');
const router= Router();

router.get('/:id',episodeController.getByID);
router.get('/',episodeController.getAll);
router.post('/', episodeController.add);
router.put('/:id', episodeController.update);
router.delete('/:id', episodeController.delete);

module.exports= router; 