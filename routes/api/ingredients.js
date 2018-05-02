const router = require('express').Router();
const db = require("../../models/");

//This hard-coded route "works", but needs refinement
router.post('/ingredients', function(req, res) {
  console.log("req body = " + JSON.stringify(req.body))
  db.IngredientsInventory.create(req.body)
  .then(function(dbIngredients){res.json(dbIngredients)})
});

//possible refinement of the above
router.post('/ingredients/:id', function(req, res) {
  db.IngredientsInventory.create({name: req.params.name, type: req.params.type, quantity: req.params.quantity, units: req.params.units, cost: req.params.cost, _userId: req.params.userId})
  .then(function(dbIngredients){res.json(dbIngredients)})
});


//PostMan says it works
router.get('/ingredients', function(req, res) {
  db.IngredientsInventory.find({})
  .then(
    dbIngredients => res.json(dbIngredients)
  )
});


//PostMan says it works
router.get('/ingredients/:id', function(req, res) {
  db.IngredientsInventory.find({_id:req.params.id})
  .then(
    dbIngredients => res.json(dbIngredients)
  )
});



router.delete('/ingredients/:id', function(req, res) {
  db.IngredientsInventory.remove({_id:req.params.id})
  .then(
    dbIngredientsInventory => res.json(dbIngredientsInventory)
  )
});

module.exports = router;