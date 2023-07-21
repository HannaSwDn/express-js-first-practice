const express = require('express');

// Just by calling express as a function, we can create an application
const app = express();

// Here, we are setting EJS as our view engine for the application
// first we are passing in the name of the setting, and then the name of the view engine
app.set('view engine', 'EJS');

// Since we do not have any routes set up yet, if we now go to localhost:3000/,
// we will see "Cannot GET /"

// This tells the app what to do when a get request
// on the specific route is called
app.get('/', (req, res) => {
    console.log('Route /');
    res.render('index', { /* Pass down value here */ });
});

// We can add /users to the route when requiring it here
const userRouter = require('./routes/users');

app.use('/users', userRouter);

// Here, we are making our app listen for requests to port 3000
app.listen(3000);