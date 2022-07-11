import mongoose from "mongoose";
import Riddle from "./riddle";

const Schema = mongoose.Schema;

const SingleSchema = new Schema({
  riddle: { type: Schema.Types.ObjectId, ref: Riddle },
  start: { type: String, required: true },
  end: { type: String, required: true },
});

mongoose.models = {};

const Single = mongoose.model("Single", SingleSchema);

export default Single;
