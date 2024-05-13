import mongoose from "mongoose"

const EarthquakeSchema = new mongoose.Schema(
  {
    magnitude: { type: Number, required: true },
    depth: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    location: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
  },
  {
    versionKey: false,
  }
)

export default mongoose.model("earthquake", EarthquakeSchema)