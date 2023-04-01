// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
const passport = require("passport");
app.use(passport.initialize()); // tell express to use passport middleware
// use this JWT strategy within passport for authentication handling

var cors = require("cors");
const corsOptions = {
    credentials: true,
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
//middleware
app.use(express.json()); //allows us to post and get json from out endpoints

// we will put some server logic here later...
const routes = require("./database/routes");
app.use("/", routes);

// export the express app we created to make it available to other modules

module.exports = app;
