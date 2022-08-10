const express = require("express");
const axios = require("axios");
module.exports.getUser = async (req, res) => {
  var options = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users ",
  };
  const result = await axios(options);

  return res.status(200).json(result.data);
};
