var router = require('../../..').Router();

//Database connection (you can change it to use a different database)
var NotesRepository = require('../repositories/note.repository');

//Controller class to handle express requests
var NotesController = require('../controllers/note.controller');

//Business logic class
var NotesService = require('../use-cases/notes');

var db = new NotesRepository()
var businessLogic = new NotesService(db)
var controller = new NotesController(businessLogic)


router.get('/', controller.getAll.bind(controller));
router.get('/:id', controller.getById.bind(controller));
router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));
router.delete('/:id', controller.delete.bind(controller));


module.exports = router;
