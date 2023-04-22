//STORING OUR ROUTES
const passport = require("passport");
// use this JWT strategy within passport for authentication handling
const { jwtOptions, jwtStrategy } = require("../jwt-config.js"); // import setup options for using JWT in passport
passport.use(jwtStrategy);
//using express's router
const { Router } = require("express");

//used in createpost for image upload
const upload = require("../utils/multer");
//using our controller.js file
const controller = require("./controller");
//router object
const router = Router();

//routes
router.get("/user/:id", controller.getUser);

router.post("/signup", controller.signup);

router.post("/login", controller.login);

router.get(
    "/checkLogin",
    passport.authenticate("jwt", { session: false }),
    controller.checkLogin
);

router.post(
    "/createPost",
    passport.authenticate("jwt", { session: false }),
    controller.createPost
);

router.post(
    "/uploadPetImage/:post_id",
    passport.authenticate("jwt", { session: false }),
    upload.single("image"),
    controller.uploadImage
);

router.get(
    "/myPosts",
    passport.authenticate("jwt", { session: false }),
    controller.myPosts
);

router.get("/pets/:petCategory", controller.getPet);

router.post("/deletepost/:post_id", controller.deletePost);

router.get("/searchResults/:searchQuery", controller.searchBar);

router.get("/petInfo/:petId", controller.petInfo);

//creating router object and adding routes to it
//going to export this router and import in server.js
module.exports = router;
