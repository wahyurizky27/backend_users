import Sector from "../models/SectorModel.js";

export const getSectors = async (req, res) => {
  try {
    const sectors = await Sector.find();
    res.json(sectors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveSector = async (req, res) => {
  const sector = new Sector(req.body);
  try {
    const insertedsector = await sector.save();
    res.status(201).json(insertedsector);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
