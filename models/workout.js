const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Schema (
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        excercises: [
            {
                type: {
                    type: String,
                    trime: true,
                    required: "Enter type."
                },
                name: {
                    type: String, 
                    trim: true,
                    required: "Enter name"
                },
                duration: {
                    type: Number,
                    required: "Enter durations"
                },
                distance: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Workout = mongoose.model("Workout", workout);

module.exports = Workout;