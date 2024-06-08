import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  dui: {
    type: String,
    required: false,
    unique: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  educational_level: {
    type: String,
    required: true,
  },
  can_read: {
    type: String,
    required: true,
  },
  can_write: {
    type: String,
    required: true,
  },
});

const familySchema = new mongoose.Schema(
  {
    community: {
      type: String,
      required: true,
    },
    housing_type: {
      type: String,
      required: true,
    },
    family_risk: {
      type: String,
      required: true,
      enum: ["bajo", "medio", "alto", "vivienda deshabitada"],
    },
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    members: [memberSchema],
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Family", familySchema);
