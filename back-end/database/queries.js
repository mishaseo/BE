//STORING ALL OUR SQL QUERIES

const getUser = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1";
const addUser =
    "INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)";
const checkEmailPasswordMatches =
    "SELECT id from users where email = $1 AND password = $2 ";

//"SELECT u from users u where u.email = $1 AND u.password = $2 ";

const createPost =
    "INSERT INTO post (petName , petCategory, petAge, petCity, petState, petCountry, contact, description, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning id";

const getPet = "SELECT * FROM post WHERE petCategory= $1";

const myPosts = "SELECT * FROM post WHERE user_id=$1";

const deletePost = "DELETE FROM post WHERE id=$1";

const uploadImage = "UPDATE post SET petimage= $1 WHERE id=$2";
const postAPet = (module.exports = {
    getUser,
    checkEmailExists,
    addUser,
    checkEmailPasswordMatches,
    createPost,
    getPet,
    myPosts,
    deletePost,
    uploadImage,
});
