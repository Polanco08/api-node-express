
module.exports = function(app){
  var ContactoCtrl     = require('../controllers/contactos');

  // Rutas contactos
  app.route('/api/contactos')
  	.post(ContactoCtrl.AddNew)
  	.get(ContactoCtrl.GetAll);

  app.route('/api/contactos/:id')
    .get(ContactoCtrl.GetById)
    .put(ContactoCtrl.Update)
    .delete(ContactoCtrl.Delete);
};
