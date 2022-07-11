import mongoose from "mongoose";
import Single from "./single";
import Player from "./player";

const Schema = mongoose.Schema;

const PlaySchema = new Schema({
  single: { type: Schema.Types.ObjectId, ref: Single },
  player: { type: Schema.Types.ObjectId, ref: Player },
  time: {
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
  won: { type: Boolean, default: false },
  answers: {
    answer_1: {
      title: { type: String, required: false },
      time: { type: String, required: false },
    },
    answer_2: {
      title: { type: String, required: false },
      time: { type: String, required: false },
    },
    answer_3: {
      title: { type: String, required: false },
      time: { type: String, required: false },
    },
    answer_4: {
      title: { type: String, required: false },
      time: { type: String, required: false },
    },
    answer_5: {
      title: { type: String, required: false },
      time: { type: String, required: false },
    },
    answer_6: {
      title: { type: String, required: false },
      time: { type: String, required: false },
    },
  },
});

mongoose.models = {};

const Play = mongoose.model("Play", PlaySchema);

export default Play;
