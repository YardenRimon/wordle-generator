// import mongoose from "mongoose";
// import App from "next/app";

export default function handler(req, res) {
  // const Place = mongoose.model("Place", {
  //   title: String,
  //   description: String,
  //   location: {
  //     long: Number,
  //     lat: Number,
  //   },
  //   img: String,
  //   details: String,
  //   used: Boolean,
  // });
  // mongoose.connect("mongodb://localhost:27017/wordleaGenerator").then(() => {
  //   App.listen(8000);
  // });
  res.status(200).json({ name: "John Doe" });
}
