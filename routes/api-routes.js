const app = require("express")
const db = require("../models/")
const logger = require('morgan');
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/workout', {useNewUrlParser: true});

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, result)=>{
            if (err){
                throw (err)
            }
            else{
                res.json(result)
            }
        })
    })

    app.post("/api/workouts/", ({ body }, res) => {
        console.log(body)

        // db.Workout.create(body)
        //   .then(workout => {
        //     console.log(workout);
        //   })
        //   .catch(err => {
        //     res.status(400).json(err);
        //   })
      });




}