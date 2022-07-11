import mongoose from "mongoose";
const Schema = mongoose.Schema;

const creatorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

const Creator = mongoose.model("Creator", creatorSchema);

export default Creator;
