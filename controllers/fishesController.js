const express = require('express');
const router = express.Router();
//Add Fish model

const Fish = require('../models').Fish;

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

// router.get('/', (req, res) => {
//     res.render('index.ejs', {
//         fruits: fruits
//     });
// });
///now for sequalize...

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
    Fish.findByPk(req.params.id).then((fish) => {
      res.render("show.ejs", {
        fishes: fishes,
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
    Fish.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((fish) => {
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