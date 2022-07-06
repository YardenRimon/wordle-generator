import connectDB from "../../middleware/mongodb";
import Place from "../../models/place";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, description, location, details } = req.body;
    // const { x, y } = location;
    if (title && description && location && details) {
      try {
        const place = new Place({
          title,
          description,
          location,
          details,
        });
        const placecreated = await place.save();
        return res.status(200).send(placecreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else if (req.method === "GET") {
    Place.find()
      .then((data) => {
        const placesNames = data.map((place) => place.title);
        const place = data.find((place) => !place.used);
        const places = data;
        res.status(200).send({ placesNames, place, places });
      })
      .catch((err) => res.send("ERROR:", err));
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
