const { Router} = require('express');

const NotesController = require('../Controllers/NotesController');
const ensureAuthenticated = require('../Middlewares/ensureAuthenticated')
const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.get('/', notesController.index);
notesRoutes.get('/:id', notesController.show);
notesRoutes.delete('/:id', notesController.delete);
notesRoutes.post('/', notesController.create);


module.exports = notesRoutes;