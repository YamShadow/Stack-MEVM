/*
Imports & configs
*/
const mongoose = require("mongoose");
const {
    Schema
} = mongoose;

/*
Model definition
*/
const gameSchema = new Schema({
    points: String,
    date: Date,
    idUser: String
});

/*
Method
*/

/*
Export
*/
const GameModel = mongoose.model("games", gameSchema);
module.exports = GameModel;