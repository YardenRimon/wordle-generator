import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  details: { type: String, required: true },
  used: { type: Boolean, default: false },
});

mongoose.models = {};

const Place = mongoose.model("place", PlaceSchema);

export default Place;
