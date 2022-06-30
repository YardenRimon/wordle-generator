import connectDB from "../../middleware/mongodb";
import bcrypt from "bcrypt";
import Place from "../../models/place";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, description, location, map, details, used } = req.body;
    if (title && description && location && map && details && used) {
      try {
        const place = new Place({
          title,
          description,
          location,
          map,
          details,
          used,
        });
        const placecreated = await place.save();
        return res.status(200).send(placecreated);
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
