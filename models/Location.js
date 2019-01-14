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
  image : String,
  rating : Number, 
  is_closed : Boolean,
  display_phone : String,
});

// create the collection with mongoose
mongoose.model('location', LocationSchema);