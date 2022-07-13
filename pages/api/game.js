import connectDB from "../../middleware/mongodb";
import GameModel from "../../models/gameModel";

const handler = async (req, res) => {
  req.dasdasd;
  if (req.method === "POST") {
    const { cicle, variant, title, creator, create } = req.body;
    if (title) {
      // const { interval, start, repit } = cicle;
      try {
        const game = new GameModel({
          //   create,
          creator,
          title,
          variant,
          //   cicle: {
          //     start, //what the time format
          //     interval, //of seconds
          //     repit,
          //   },
        });
        const gmaeCreated = await game.save();
        console.log("gmaeCreated", gmaeCreated);
        return res.status(200).send(gmaeCreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
