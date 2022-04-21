const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let gameSchema = new Schema({
   name: {
      type: String
   },
   descp: {
      type: String
   },
   url: {
      type: String
   },
   addedWishlist: {
      type: Boolean
   }
})
module.exports = mongoose.model('games', gameSchema)