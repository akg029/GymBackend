var express = require('express');
var router = express.Router();

const Users = require("../controllers/user.controller");
const user = new Users;


router.post('/usersignUp',user.userSignUp)
router.post('/login',user.Login)
module.exports = router;