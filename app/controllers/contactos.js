// Importamos el model Contactos
var Contacto    = require('../models/Contacto');



//GET - Retorna Todos los contactos de la BD
//------------------------------------------------
exports.GetAll = function(req, res) {
    Contacto.find(function(err, contactos) {
    if(err) res.send(500, err.message);

    console.log("Dentro de GetAll() controllers");

    console.log('GET /contactos')
        res.status(200).jsonp(contactos);
    });
};

//GET - Busca contacto por su ID
//-------------------------------------------------
exports.GetById = function(req, res) {
    Contacto.findById(req.params.id, function(err, contacto) {
    if(err)
        return res.send(500, err.message);

    console.log('GET /contacto/' + req.params.id);
        res.status(200).jsonp(contacto);
    });
};

//POST - Crear nuevo contacto
//------------------------------------------------
exports.AddNew = function(req, res) {
    console.log('POST: /contactos');
    console.log(req.body);

    var contacto = new Contacto({
        name:   req.body.name,
        email:  req.body.email,
        web:    req.body.web,
        phones: req.body.phones
    });

    contacto.save(function(err, _contacto) {
        if(err)
            return res.status(500).send( err.message);

        res.status(200).jsonp({ mensaje:'Contacto añadido correctamente!', contacto: _contacto});
    });
};

//PUT - Actualizar contacto existente
//---------------------------------------------------
exports.Update = function(req, res) {

    Contacto.findById(req.params.id, function(err, _contacto) {

        console.log("PUT: /contactos:id");

        if (err)
            res.send(err);

        _contacto.name  = req.body.name;
        _contacto.email = req.body.email;
        _contacto.web   = req.body.web;
        _contacto.phones = req.body.phones;

        // Guardamos el modelo Contacto
        _contacto.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Contacto actualizado correctamente!', contacto: _contacto });
        });

    });
};

//DELETE - Eliminar contacto por su ID
//-------------------------------------------------------
exports.Delete = function(req, res) {
    console.log("DELETE: /contactos:id");

    Contacto.remove({
        _id: req.params.id
    }, function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Contacto eliminado correctamente!' });
    });
};
