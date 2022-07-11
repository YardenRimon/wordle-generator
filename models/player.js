import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  since: { type: String, required: true },
  device: { type: String, required: true },
  //ip? country?
});

mongoose.models = {};

const Place = mongoose.model("player", PlayerSchema);

export default Place;
