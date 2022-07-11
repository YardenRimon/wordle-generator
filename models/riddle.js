import mongoose from "mongoose";
import Game from "./game";
const Schema = mongoose.Schema;

const RiddleSchema = new Schema({
  game: { type: Schema.Types.ObjectId, ref: Game },
  create: { type: String, required: true },
  lastEdit: { type: String, required: true },
  title: { type: String, required: true },
  answer: { type: String, required: true },
  description: { type: String, required: false },
  media: { type: String, required: false }, //adress
  location: {
    longitude: { type: Number, required: false },
    latitude: { type: Number, required: false },
  },
  details: {
    firstLink: { type: Array, required: false },
    secondLink: { type: Array, required: false },
    thirdLink: { type: Array, required: false },
  },
  hints: {
    firstHint: { type: Array, required: false },
    secondHint: { type: Array, required: false },
    thirdHint: { type: Array, required: false },
  },
});

mongoose.models = {};

const Riddle = mongoose.model("Riddle", RiddleSchema);

export default Riddle;
