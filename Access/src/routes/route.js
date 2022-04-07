const express = require('express');

const Controllers = require('../controller/Controllers')

const middleWare = require('../middleware/authentication')

//-----------------user-------------------//

const router = express.Router();

router.post("/register", Controllers.createUser);

router.post("/login", Controllers.doLogin);

router.get("/user/:userId/profile",middleWare.auth, Controllers.getuserById);



module.exports = router;


