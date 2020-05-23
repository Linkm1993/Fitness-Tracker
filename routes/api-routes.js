const app = require("express")
const db = require("../models/")
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




}