const games = require("../models/games")

exports.getGames = async((req, res) => {
 const db = await games.find();
 res.status(200).json({
     success,
     db
 })  
})