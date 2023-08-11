import mongoose from "mongoose";

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  term: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Users", User);
