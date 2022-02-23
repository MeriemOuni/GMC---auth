// require express
const express = require("express");
const { signup, signin } = require("../controllers/user");
const isAuth = require("../middleware/isAuth");
const { registerValdidation, validation, loginValidation } = require("../middleware/user");

// instance router
const router = express.Router()

// route user (signup & signin)

// signup
router.post("/signup",registerValdidation(),validation, signup);

// signin
router.post("/signin",loginValidation(),validation, signin);

// current User
router.get("/current", isAuth , (req, res) => {
    res.send(req.user)
})


// export 
module.exports = router;