# Creando una API RESTful en Node y Express 4.

La idea es crear una api para ser consumida con Angular. Será un listado de contactos, cada contacto podrá tener varios teléfonos más su información básica.

No es nada del otro mundo pero sirve como aprendisaje para conocer el nuevo sistema de rutas de Express 4.


##Instalación

	1. [Clona el repositorio](https://github.com/Polanco08/api-node-express.git)
	2. Instala las dependencias: `npm install`
	3. Inicia el servidor: `node app.js`

El servidor está corriendo en el puerto `8080`

##Rutas
| HTTP Method  | Url                                 | Descripción |
| :-----------:| :------------------------------------   |:-----------|
| GET:	       | - http://localhost:8080/api/contactos    | Muestra un listado de contactos |
| POST:	       | - http://localhost:8080/api/contactos    | Agregar nuevo contacto. |
| GET:	       | - http://localhost:8080/api/contactos/id | Muestra un contacto especificado por su id |
| DELETE:      | - http://localhost:8080/api/contactos/id | Elimina un contacto por su id |
| UPDATE:      | - http://localhost:8080/api/contactos/id | Actualiza el contacto por su id |
