const express = require("express");
const router = express.Router();
//routes for admin , authentication , student , teacher
router.use("/v1", require("./v1"));


module.exports = router;