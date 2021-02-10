const express = require('express');
const app = express();
//const fruits = require('./models/fruits.js');

const methodOverride = require('method-override');
//MIDDLEWARE starts here, comes before routes.
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({ extended: true }))

//after app has been defined, use methodOverride.  
//We'll be adding a query parameter to our delete form named _method

//Controllers
app.use("/fruits", require("./controllers/fruitsController"));
app.use("/users", require("./controllers/usersController.js"));
//MIDDLEWARE ends
 
//////Routes 
//index--reading a page in views
// app.get('/fruits', (req, res) => {
//     res.render('index.ejs', {
//         fruits: fruits
//     });
// })
//Delete
// app.delete('/fruits/:index', (req, res) => {
// 	fruits.splice(req.params.index, 1); //remove the item from the array
// 	res.redirect('/fruits');  //redirect back to index route
// });


//New- renders new.ejs html file
// app.get('/fruits/new',(req,res)=>{
// console.log(req.body)
// res.render('new.ejs')

// })
//Post
// app.post('/fruits', (req, res) => {
//     res.send('hi');
// });
// app.post('/fruits', (req, res)=>{
//     if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is 
//         ///set to 'on, turn to boolean true'
//         req.body.readyToEat = true; //do some data correction
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false; //do some data correction
//     }
//     fruits.push(req.body);
    
//     res.redirect('/fruits');
// });
// app.post('/fruits', (req, res)=>{
//     console.log(req.body);
//     res.send('data received');
// });


// //Get route for EDIT
// app.get('/fruits/:index/edit', (req, res) =>{
// 	res.render('edit.ejs', //render views/edit.ejs
// 		{ //pass in an object that contains
// 			fruit: fruits[req.params.index], //the fruit object
// 			index: req.params.index //... and its index in the array
// 		}
// 	);
// });

//PUT route for EDIT
// app.put('/fruits/:index', (req, res) => { //:index is the index of our fruits array that we want to change
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

//SHOW


// app.get('/fruits/count', (req, res) => {
//     let fruitName = req.query.name; 
//     let count = fruits.filter((value) => {
//         return value === fruitName
//     }).length;
//     res.send(`The number of ${fruitName}s are ${count}`);
// })

app.listen(3000, () => {
    console.log('I am listening');
})