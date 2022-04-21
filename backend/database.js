const mongoose = require('mongoose');
const game = require('./models/games');

const connectDB = ()=> { mongoose
  .connect('mongodb://127.0.0.1:27017/mydatabase')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
}
  
  module.exports=connectDB;