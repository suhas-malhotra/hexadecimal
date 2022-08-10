const express = require("express");
const usersAPI = require("../../../controllers/users_api");
const router = express.Router();

//Events API

// API
// get events
//API Working
router.get("/users", usersAPI.getUser);

module.exports = router;
