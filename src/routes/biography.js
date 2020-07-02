const express = require('express');
const routes = express.Router();


const BiographyController = require("../controllers/BiographyController")

routes.post('/register/biography', BiographyController.store)

routes.get('/biographies', BiographyController.index)

routes.get('/biography/:id', BiographyController.show)

routes.delete('/biography/:id', BiographyController.destroy)

module.exports = routes