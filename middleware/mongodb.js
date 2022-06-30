import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  const { DB_NAME, DB_HOST, DB_USER, DB_PASS } = process.env;
  // const PORT = process.env.PORT || 8000;
  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
  );
  //   .then(() => {
  //     console.log(`Listening on port ${PORT}`);
  //     app.listen(PORT);
  //   })
  //   .catch((err) => console.log(err));
  //   });
  return handler(req, res);
};

export default connectDB;
