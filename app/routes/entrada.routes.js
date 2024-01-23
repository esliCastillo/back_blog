module.exports = app => {
    const entradas = require("../controllers/entrada.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Entrada
    router.post("/", entradas.create);
  
    // Retrieve all Entradas
    router.get("/", entradas.findAll);
  
    // Retrieve all published Entradas
    router.get("/published", entradas.findAllPublished);
  
    // Retrieve a single Entrada with id
    router.get("/:id", entradas.findOne);
  
    // Update a Entrada with id
    router.put("/:id", entradas.update);
  
    // Delete a Entrada with id
    router.delete("/:id", entradas.delete);
  
    // Delete all Entradas
    router.delete("/", entradas.deleteAll);
  
    app.use('/api/entradas', router);
  };