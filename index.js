import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import "dotenv/config"; // Import and configure dotenv

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGODB_CONNECT_URI;

const app = express();
mongoose.connect(`${MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(
  cors({
    origin: ["https://frontend-users-eta.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(UserRoute);

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
