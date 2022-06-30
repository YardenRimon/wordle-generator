import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  const { DB_NAME, DB_HOST, DB_USER, DB_PASS } = process.env;
  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
  );
  return handler(req, res);
};

export default connectDB;
