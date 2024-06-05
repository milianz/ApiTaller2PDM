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
    type: Boolean,
    required: true,
  },
  can_write: {
    type: Boolean,
    required: true,
  },
  family_role: {
    type: String,
    required: true,
    enum: ["padre", "madre", "hijo", "hija", "otro"],
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
    approximate_location: {
      type: { type: String },
      coordinates: [Number],
    },
    members: [memberSchema],
  },
  {
    timestamps: true,
  }
);

familySchema.index({ approximate_location: "2dsphere" });
export default mongoose.model("Family", familySchema);
