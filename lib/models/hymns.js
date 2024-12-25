import { Schema, model, models } from "mongoose";

const HymnSchema = new Schema(
  {
    hymn_number: { type: "string", required: true, unique: true },
    hymn_title: { type: "string", required: true, unique: true },
    hymn_content: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
);

const Hymn = models.Hymn || model("Hymn", HymnSchema);

export default Hymn;
