const express = require('express');
const router = express.Router();
//Add Fish model
const Fish = require('../models').Fish;
const User = require('../models').User;

//NEW
router.get('/new',(req,res)=>{
    res.render('new.ejs')
    
    })
///POST
/// sequelized
router.post("/", (req, res) => { 
    Fish.create(req.body).then((newFish) => {
      res.redirect("/fishes");
    });
  });

// Add index route

router.get("/", (req, res) => {
  Fish.findAll().then((fishes) => {
    res.render("index.ejs", {
      fishes: fishes,
    });
  });
});

//Show
/// sequelize
router.get("/:id", (req, res) => {
  console.log("open fish", req.params.id)
    Fish.findByPk(req.params.id).then((fish) => {
      res.render("show.ejs", {
        fish: fish,
      });
    });
  });
  
//Get route for EDIT
//Sequelized
router.get("/:id/edit", function (req, res) {
    Fish.findByPk(req.params.id).then((fishes) => {
      res.render("edit.ejs", {
        fishes: fishes,
      });
    });
  });

//Sequelized
router.put("/:id", (req, res) => {
  console.log(req.body)
  Fish.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((fish) => {
    console.log(fish)
    res.redirect("/fishes");
  });
});


//Delete
//sequelized
router.delete("/:id", (req, res) => {
    Fish.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/fishes");
    });
  });

module.exports = router;