import { model, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Category", categorySchema);
