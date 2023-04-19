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
module.exports = router;
