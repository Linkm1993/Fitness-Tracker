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
      app.post("/api/workouts", ({body}, response) => {
        console.log(body)
        db.Workout.create({
          day: Date.now()
        })
          .then(newWorkout => {
            response.json(newWorkout);
          })
          .catch(err => response.json(err));
      });
      //allows user to finish/update a current workout
      app.put("/api/workouts/:id", (request, response) => {
        db.Workout.findByIdAndUpdate(
          request.params.id,
          { $push: { exercises: request.body } },
          { new: true }
        )
          .then(workout => response.json(workout))
          .catch(err => response.json(err));
      });  

}