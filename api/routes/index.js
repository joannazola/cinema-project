var express = require("express");
var router = express.Router();

const ObjectID = require("mongodb").ObjectID;

router.get("/movies", (req, res, next) => {
  req.collection
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((error) => res.send(error));
});
router.get("/movies-user", (req, res, next) => {
  req.collection
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((error) => res.send(error));
});

router.post("/movies-user", (req, res, next) => {
  const { name, surname, email, movie, time, date, place } = req.body;
  if (!name || !surname || !email || !movie || !time || !date || !place) {
    return res.status(400).json({
      message: "Incorrect data!",
    });
  }
  const collectionData = { name, surname, email, movie, time, date, place };
  req.collection
    .insertOne(collectionData)
    .then((result) => res.json(result))
    .catch((error) => res.send(error));
});
router.post("/movies", (req, res, next) => {
  const { movie, time, date, place } = req.body;
  if (!movie || !time || !date || !place) {
    return res.status(400).json({
      message: "Incorrect data!",
    });
  }
  const collectionData = { movie, time, date, place };
  req.collection
    .insertOne(collectionData)
    .then((result) => res.json(result))
    .catch((error) => res.send(error));
});

router.delete("/movies-user/:id", (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectID(id);

  req.collection
    .deleteOne({ _id })
    .then((result) => res.json(result))
    .catch((error) => res.send(error));
});
module.exports = router;
