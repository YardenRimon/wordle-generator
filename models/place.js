import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Place = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  map: { type: String, required: true },
  details: { type: String, required: true },
  used: { type: Boolean, required: true },
});

mongoose.models = {};

var User = mongoose.model("place", Place);

export default User;
