//STORE OUR BUSINESS LOGIC RELATED TO EACH ROUTE
const pool = require("./db");
const queries = require("./queries");

// the following are used for authentication with JSON Web Tokens
const jwt = require("jsonwebtoken");
const passport = require("passport");
// use this JWT strategy within passport for authentication handling
const { jwtOptions, jwtStrategy } = require("../jwt-config"); // import setup options for using JWT in passport
passport.use(jwtStrategy);

//cloudinary  for image upload
const cloudinary = require("../utils/cloudinary");

const getUser = (req, res) => {
    const id = parseInt(req.params.id);
    //has a callback (takes in error and results)
    pool.query(queries.getUser, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

//-----------------------------SIGNUP USER---------------------------------
const signup = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        } else {
            //add student to db
            pool.query(
                queries.addUser,
                [firstname, lastname, email, password],
                (error, results) => {
                    if (error) throw error;
                    else {
                        res.status(201).send("Success");
                    }
                }
            );
        }
    });
};

//---------------------------------LOGIN USER---------------------------------
const login = (req, res) => {
    const { email, password } = req.body;
    // console.log(email);
    // console.log(password);
    pool.query(
        queries.checkEmailPasswordMatches,
        [email, password],
        (error, results) => {
            // console.log(results.rows.length);
            if (results.rows.length === 0) {
                res.status(401).send("Invalid email or password");
            } else {
                // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
                user = results.rows[0];
                const payload = user; // some data we'll encode into the token
                const token = jwt.sign(payload, jwtOptions.secretOrKey); // create a signed token
                res.status(200).json({
                    success: true,
                    token: token,
                });
            }
        }
    );
};

//---------------------------------------POSTAPET--------------------------------------
const createPost = (req, res) => {
    const {
        petName,
        petCategory,
        petAge,
        petCity,
        petState,
        petCountry,
        contact,
        description,
    } = req.body;
    //check if email exists

    pool.query(
        queries.createPost,
        [
            petName,
            petCategory,
            petAge,
            petCity,
            petState,
            petCountry,
            contact,
            description,
            req.user.id,
        ],
        (error, results) => {
            if (error) throw error;
            else {
                //console.log(results);
                res.status(200).json(results.rows[0]);
            }
        }
    );
};

//---------------------------------------UPLOAD IMAGE-------------------------------------
const uploadImage = async (req, res) => {
    const post_id = req.params.post_id;
    //debugging
    console.log("post_id ", post_id);
    console.log("file ", req.file);
    if (req.file) {
        try {
            // Upload image to cloudinary
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "user_pet_uploads",
                use_filename: true,
            });
            //debugging
            console.log("result cloudinary ", result.secure_url);
            // Create new user

            // let user = new User({
            //     name: req.body.name,
            //     profile_img: result.secure_url,
            //     cloudinary_id: result.public_id,
            // });
            pool.query(
                queries.uploadImage,
                [result.secure_url, post_id],
                (error, results) => {
                    if (error) throw error;
                    else res.status(200).send("Success");
                }
            );
        } catch (err) {
            console.log(err);
        }
    } else {
        pool.query(
            queries.uploadImage,
            [
                "https://res.cloudinary.com/mishaprojectcloud/image/upload/v1680460380/fetchapet/user_pet_uploads/tempimage_im8mtp.webp",
                post_id,
            ],
            (error, results) => {
                if (error) throw error;
                else res.status(200).send("Success");
            }
        );
    }
};

//---------------------------------GET PET POSTS BY CATEGORY---------------------------------
const getPet = (req, res) => {
    const petCategory = req.params.petCategory;
    //console.log(petCategory);
    pool.query(queries.getPet, [petCategory], (error, results) => {
        if (error) throw error;
        else res.status(200).json(results.rows);
    });
};

//---------------------------------GET USER'S POSTS---------------------------------
const myPosts = (req, res) => {
    //need to get id
    user_id = req.user.id;
    pool.query(queries.myPosts, [user_id], (error, results) => {
        if (error) throw error;
        else res.status(200).json(results.rows);
    });
};

//---------------------------------check if logged in (used in header)---------------------------------
const checkLogin = (req, res) => {
    // our jwt passport config will send error responses to unauthenticated users will
    // so we only need to worry about sending data to properly authenticated users!

    res.json({
        success: true,
        user: {
            id: req.user.id,
        },
        message:
            "Congratulations: you have accessed this route because you have a valid JWT token!",
    });
};

//---------------------------------DELETE A POST---------------------------------
const deletePost = (req, res) => {
    post_id = req.params.post_id;
    pool.query(queries.deletePost, [post_id], (error, results) => {
        //console.log("here we are trying to delete");
        if (error) throw error;
        else {
            // console.log("success");
            res.status(200).send("success");
        }
    });
};

//--------------------------FETCH SEARCH DATA------------------------
const searchBar = (req, res) => {
    let query = req.params.searchQuery;
    query = "%" + query + "%";
    pool.query(queries.searchBar, [query], (error, results) => {
        if (error) throw error;
        else {
            res.status(200).json(results.rows);
        }
    });
};
// const getPostInfo = (req, res) => {
//     post_id = req.params.post_id;
//     pool.quers(queries.getPostInfo, [post_id], (error, results) => {
//         if (error) throw error;
//         else {
//             // console.log("success");
//             res.status(200).json(results.rows[0]);
//         }
//     });
// };

module.exports = {
    getUser,
    signup,
    login,
    checkLogin,
    createPost,
    getPet,
    myPosts,
    deletePost,
    uploadImage,
    searchBar,
};
