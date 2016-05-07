# Creando una API RESTful en Node y Express 4.

La idea es crear una api para ser consumida con Angular. Será un listado de contactos, cada contacto podrá tener varios teléfonos más su información básica.

No es nada del otro mundo pero sirve como aprendisaje para conocer el **MEAN Stack**.

Para el desarrollo de esta simple API REST, he utilizado [Nodejs](https://nodejs.org/en/), [Expressjs](http://expressjs.com/), [MongoDb](https://www.mongodb.com/), priximamente utilizaré [Angular](https://angularjs.org) para consumir nuestra API REST.

##Instalación

1. [Clona el repositorio](https://github.com/Polanco08/api-node-express.git)
2. Instala las dependencias: `npm install`
3. Inicia el servidor: `node app.js`

El servidor está corriendo en el puerto `8080`

##Rutas : Contacto 
| HTTP Method  | Url                                 | Descripción |
| :----------- | :------------------------------------   |:-----------|
| GET:	       | - http://localhost:8080/api/contactos    | Muestra un listado de contactos |
| POST:	       | - http://localhost:8080/api/contactos    | Agregar nuevo contacto. |
| GET:	       | - http://localhost:8080/api/contactos/id | Muestra un contacto especificado por su id |
| DELETE:      | - http://localhost:8080/api/contactos/id | Elimina un contacto por su id |
| PUT:         | - http://localhost:8080/api/contactos/id | Actualiza el contacto por su id |



## Contacto Controller

#####GET: /api/contactos
```javascript
//GET - Retorna Todos los contactos de la BD
//------------------------------------------------
exports.GetAll = function(req, res) {  
    Contacto.find(function(err, contactos) {
    if(err) res.send(500, err.message);

    console.log('GET /contactos')
        res.status(200).jsonp(contactos);
    });
};
```
#####GET: /api/contactos
```javascript
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
```

#####GET: /api/contactos/id
```javascript
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
```

#####PUT: /api/contactos/id
```javascript
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
```

#####DELETE  /api/contactos/id
```javascript
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

```
