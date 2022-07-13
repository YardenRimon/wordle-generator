import connectDB from "../../middleware/mongodb";
import RiddleModel from "../../models/riddleModel";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title: answer, description, location, details } = req.body;
    // const { x, y } = location;
    if (answer && description && location && details) {
      try {
        const riddle = new RiddleModel({
          title: answer,
          description,
          location,
          details,
        });
        const placecreated = await riddle.save();
        return res.status(200).send(placecreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    RiddleModel.find()
      .then((data) => {
        const answers = data.map((riddle) => riddle.answer);
        const riddle = data.find((riddle) => !riddle.used);
        const riddles = data;
        res.status(200).send({ answers, riddle, riddles });
      })
      .catch((err) => res.send("ERROR:", err));
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
