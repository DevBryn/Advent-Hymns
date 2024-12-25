import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionsState = mongoose.connection.readyState;

  if (connectionsState === 1) {
    console.log("Connected to database.");
    return;
  }

  if (connectionsState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI, {
      dbName: "sdahymnals",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error: ", error);
  }
};

export default connect;
