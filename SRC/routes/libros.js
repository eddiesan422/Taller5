const express = require("express");
const router = express.Router(); //manejador de rutas de express
const libroSchema = require("../models/libros"); //importando el modelo de libros

router.post("/libros", (req, res) => {
    const libro = libroSchema(req.body);
    libro
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//endpoint para Consultar todos los animales
router.get("/libros", (req, res) => {
    libroSchema
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
  
  //endopoint para Consultar un animal
  router.get("/libros/:id", (req, res) => {
    const { id } = req.params;
    libroSchema
      .findOne({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
  
  //endpoint para Modificar un animal usando el id
  router.put("/libros/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo } = req.body;
    libroSchema
      .updateOne(
        { _id: id },
        {
          $set: { nombre, edad, tipo },
        }
      )
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
  
  //endpoint para Eliminar un animal usando el id
  router.delete("/libros/:id", (req, res) => {
    const { id } = req.params;
    libroSchema
      .findByIdAndDelete({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ message: error });
      });
  });
  module.exports = router;
