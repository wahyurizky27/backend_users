import mongoose from "mongoose";

const Sector = mongoose.Schema({
  sectorName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Sectors", Sector);
