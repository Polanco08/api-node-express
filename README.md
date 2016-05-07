# Creando una API RESTful en Node y Express 4.

La idea es crear una api para ser consumida con Angular. Será un listado de contactos, cada contacto podrá tener varios teléfonos más su información básica.

No es nada del otro mundo pero sirve como aprendisaje para conocer el nuevo sistema de rutas de Express 4.


##Instalación

	- Clona el repositorio: ``
	- Instala las dependencias: `npm install`
	- Inicia el servidor: `node app.js`

El servidor está corriendo en el puerto `8080`

#Rutas
| HTTP Method  | Full url                                 |
| :-----------:| :------------------------------------   |
| GET:	       | - http://localhost:8080/api/contactos    |
| POST:	       | - http://localhost:8080/api/contactos    |
| GET:	       | - http://localhost:8080/api/contactos/id |
| DELETE:      | - http://localhost:8080/api/contactos/id |
| UPDATE:      | - http://localhost:8080/api/contactos/id |
