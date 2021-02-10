const express = require('express');
const app = express();

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
app.use("/fishes", require("./controllers/fishesController"));
app.use("/users", require("./controllers/usersController.js"));
//MIDDLEWARE ends
 


app.listen(3000, () => {
    console.log('I am listening');
})