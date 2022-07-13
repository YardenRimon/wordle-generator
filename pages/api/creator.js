import connectDB from "../../middleware/mongodb";
import bcrypt from "bcrypt";
import CreatorModel from "../../models/creatorModel";

const handler = async (req, res) => {
  req.dasdasd;
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    const { first, last } = name;
    if (name && email && password) {
      try {
        const passwordhash = await bcrypt.hash(password, 10);
        const creator = new CreatorModel({
          name: { first, last },
          email,
          password: passwordhash,
        });
        const creatorCreated = await creator.save();
        console.log("creatorCreated", creatorCreated);
        return res.status(200).send(creatorCreated);
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
