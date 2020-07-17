const express = require("express"),
          app = express(),
   bodyParser = require("body-parser"),
     mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`app is listening on PORT ${PORT}`);
});
