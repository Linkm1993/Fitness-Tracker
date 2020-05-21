const path = require("path")

module.exports = function(app) {

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"), {title:"Fitness Tracker"});
    });

    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"), {title:"Fitness Tracker"});
      });

    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"), {title:"Fitness Tracker"});
      });
}    
