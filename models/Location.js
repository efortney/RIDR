/**
 * Mongoose model class for a location
 */
const mongoose = require('mongoose');
const {Schema}  = mongoose;

const LocationSchema = new Schema({
  name : String,
  coordinates : {
      latitude : Number,
      longitude : Number
  },
  address : String,
  rating : Number, 
  is_closed : Boolean,
});

// create the collection with mongoose
mongoose.model('location', LocationSchema);