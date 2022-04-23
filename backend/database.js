const mongoose = require('mongoose');
const game = require('./models/games');
const localurl = 'mongodb://127.0.0.1:27017/mydatabase';
const url = 'mongodb+srv://originmtm:originmtm@cluster0.knfvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDB = ()=> { mongoose
  .connect(url)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })
}
  
  module.exports=connectDB;