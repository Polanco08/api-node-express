// app/models/contacto.js
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ContactoSchema   = new Schema({
    name: String,
    email: String,
    phone: String,
    web: String
});

module.exports = mongoose.model('Contacto', ContactoSchema);