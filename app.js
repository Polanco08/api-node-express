// server.js


// =============================================================================//
// ================================= BASE SETUP ================================//
// =============================================================================//

// Llamadas a los packages que necesitamos
var express    = require('express'),        
	app        = express(),    // Definición de app express
	bodyParser = require('body-parser'),
	mongoose   = require('mongoose');

// configuración de la aplicación con bodyParser()
// Esto nos permitirá obtener los datos mediante POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // El puerto donde escucha nuestro server



// ============================================================================= //
// ========================= ROUTES FOR OUR API ================================ //
// ============================================================================= //
var router = express.Router();  // Instancia del módulo re rutas de Express


// MiddleWare, Ruta utilizada para todas la peticiones
//-----------------------------------------------------
router.use(function(req, res, next) {
    // do logging
    console.log('Server: Petición recivida...');
    next(); // Nos aseguramos enviar la petición a la proxima ruta.
});


// GET: http://localhost:8080/api : 
// Ruta de prueba, comprobamos que todo funciona
//-----------------------------------------------------
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


// Rutas Modulo Bears
//------------------------------------------------------
var BearCtrl     = require('./app/controllers/bears');


router.route('/bears')
    // POST: Create New http://localhost:8080/api/bears
    .post(BearCtrl.AddNew)

    // GET: Get list http://localhost:8080/api/bears
    .get(BearCtrl.GetAll);

router.route('/bears/:id')
  .get(BearCtrl.GetById)
  .put(BearCtrl.Update)
  .delete(BearCtrl.Delete);


// Rutas Modulo Contacto
//------------------------------------------------------
var ContactoCtrl     = require('./app/controllers/contactos');

router.route('/contactos')
	.post(ContactoCtrl.AddNew)
	.get(ContactoCtrl.GetAll);
	
router.route('/contactos/:id')
  .get(ContactoCtrl.GetById)
  .put(ContactoCtrl.Update)
  .delete(ContactoCtrl.Delete);

// Configuramos el prefijo /API a todas las rutas
//------------------------------------------------------
app.use('/api', router);



// ============================================================================= //
// ========================== INICIAMOS EL SERVIDOR ============================ //
// ============================================================================= //

mongoose.connect('mongodb://localhost/contactList', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(port, function() {
    console.log("Node server running on http://localhost:"+port);
  });
});
