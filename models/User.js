/**
 * Mongoose model class for a user
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: String,
  firstName: String,
  lastName: String,
  rideCount: Number,
});

// create the collection with mongoose
mongoose.model('users', userSchema);