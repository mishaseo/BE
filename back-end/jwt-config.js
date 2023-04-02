const pool = require("./database/db");
const queries = require("./database/queries");
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

// set up some JWT authentication options
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt"); // look for the Authorization request header
jwtOptions.secretOrKey = "fetchapetpassword";
//process.env.JWT_SECRET; // an arbitrary string used during encryption - see the .env file
//console.log(jwtOptions); // debug to make sure the secret from the .env file is loaded correctly
// passport can work with many authentication systems... here we are setting some middleware code for using JWT that we'll pass to passport to use
const jwtStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    //console.log("JWT payload received", JSON.stringify(jwt_payload)); // debugging

    // try to find a matching user in our "database"
    let user;
    pool.query(queries.getUser, [jwt_payload.id], (error, results) => {
        if (error) throw error;
        if (results.rows.length != 0) {
            // we found the user... keep going
            user = results.rows[0];
        }
        if (user) {
            next(null, user);
        } else {
            // we didn't find the user... fail!
            next(null, false);
        }
    });
});

module.exports = {
    jwtOptions,
    jwtStrategy,
};
