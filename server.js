const express = require("express");
const mongoose = require('mongoose');
const mdb = mongoose.connection;
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true});

mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function() {
  console.log("Connected to MongoDB!")
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routes/html-routes.js")(app);
require("./routes/api-routes")(app);

app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });