const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const games = require("../models/games")


exports.getGames = catchAsyncErrors(async (req, res, next) => {

    const db = await games.find();
  
    res.status(200).json({
        db
    }) 
  });
  