import Family from "../models/family.model.js";

export const createFamily = async (req, res) => {
  const {
    community,
    housing_type,
    family_risk,
    members,
    approximate_location,
  } = req.body;
  try {
    const newFamily = new Family({
      community,
      housing_type,
      family_risk,
      members,
      approximate_location,
    });

    const familySaved = await newFamily.save();
    res.status(201).json(familySaved);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Registration failed" });
  }
};

export const getFamilies = async (res) => {
    try {
        const families = await Family.find();
        res.status(200).json(families);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to get families" });
    }
};
