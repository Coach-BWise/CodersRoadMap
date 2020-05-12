const router = require("express").Router();
let Unit = require("../models/unit-model");

//First endpoint that handles incoming HTTP GET requests on /units
router.route("/").get((req, res) => {
  Unit.find()
    .then((units) => res.json(units))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//Endpoint handles GET requests of single unit on /units/:id
router.route("/:id").get((req, res) => {
  Unit.findById(req.params.id)
    .then((unit) => res.json(unit))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//This endpoint handles POST requests on /units/add
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const newUnit = new Unit({ name, description });

  newUnit
    .save()
    .then(() => res.json("Unit Added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//This endpoint handles DELETE on /units/:id
router.route("/:id").delete((req, res) => {
  Unit.findByIdAndDelete(req.params.id)
    .then(() => res.json("Unit Deleted"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//This endpoint handles UPDATE on /units/update/:id
router.route("/update/:id").put((req, res) => {
  Unit.findById(req.params.id)
    .then((unit) => {
      unit.name = req.body.name;
      unit.description = req.body.description;

      unit
        .save()
        .then(() => res.json("Unit Updated!"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
