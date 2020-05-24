const app = require("express")
const db = require("../models/")
const logger = require('morgan');
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true});

module.exports = function(app) {

    app.get("/api/workouts", (request, response) => {
        db.Workout.find({}, (err, result)=>{
            if (err){
                throw (err)
            }
            else{
                response.json(result)
            }
        })
    })

    app.get("/api/workouts/range", (request, response) => {
        db.Workout.find({})
          .then(workouts => {
            response.json(workouts);
          })
          .catch(err => response.json(err));
      });

}