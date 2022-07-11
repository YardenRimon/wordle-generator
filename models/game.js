import mongoose from "mongoose";
import Creator from "./creator";
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  create: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: Creator },
  title: { type: String, required: true },
  variant: { type: String, reguired: true },
  cicle: {
    loadNew: { type: String, default: "00:00:00" }, //what the time format
    Interval: { type: Number, default: 60 * 60 * 24 }, //of seconds
    repit: { type: Number, default: Infinity },
    past: { type: Number, required: true },
  },
});

mongoose.models = {};

const Game = mongoose.model("Game", GameSchema);

export default Game;
