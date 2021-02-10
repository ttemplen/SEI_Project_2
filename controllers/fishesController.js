const express = require('express');
const router = express.Router();
//Add Fruit model
// const fruits = require('../Fruit');
const Fruit = require('../models').Fruit;

//NEW
router.get('/new',(req,res)=>{
    res.render('new.ejs')
    
    })
///POST
// router.post('/', (req, res)=>{
//     if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is 
//         ///set to 'on, turn to boolean true'
//         req.body.readyToEat = true; //do some data correction
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false; //do some data correction
//     }
//     fruits.push(req.body);
    
//     res.redirect('/fruits');
// });

/// sequelized
router.post("/", (req, res) => {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
  
    Fruit.create(req.body).then((newFruit) => {
      res.redirect("/fruits");
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
    Fruit.findAll().then((fruits) => {
      res.render("index.ejs", {
        fruits: fruits,
      });
    });
  });

//Show
// router.get('/:index', (req, res) => {
  
//     res.render('show.ejs', {
//         fruit:fruits[req.params.index]
//     });
// })
/// sequelize
router.get("/:id", (req, res) => {
    Fruit.findByPk(req.params.id).then((fruit) => {
      res.render("show.ejs", {
        fruit: fruit,
      });
    });
  });
  
//Get route for EDIT
// router.get('/:index/edit', (req, res) =>{
// 	res.render('edit.ejs', //render views/edit.ejs
// 		{ //pass in an object that contains
// 			fruit: fruits[req.params.index], //the fruit object
// 			index: req.params.index //... and its index in the array
// 		}
// 	);
// });

//Sequelized
router.get("/:id/edit", function (req, res) {
    Fruit.findByPk(req.params.id).then((fruit) => {
      res.render("edit.ejs", {
        fruit: fruit,
      });
    });
  });

// router.put('/:index', (req, res) => { //:index is the index of our fruits array that we want to change
//     if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true;
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false;
//     }
//     fruits[req.params.index] = req.body; //in our fruits array, 
//     //find the index that is specified in the url (:index). 
//     // Set that element to the value of req.body (the input data)
// 	res.redirect('/fruits'); //redirect to the index page
// });

//Sequelized
router.put("/:id", (req, res) => {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    Fruit.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((fruit) => {
      res.redirect("/fruits");
    });
  });


//Delete
// router.delete('/:index', (req, res) => {
// 	fruits.splice(req.params.index, 1); //remove the item from the array
// 	res.redirect('/fruits');  //redirect back to index route
// });

//sequelized
router.delete("/:id", (req, res) => {
    Fruit.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/fruits");
    });
  });

module.exports = router;