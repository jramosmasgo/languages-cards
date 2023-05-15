import { ITag } from "@interfaces/tag.interface";
import { Schema, model } from "mongoose";

const TagSchema = new Schema<ITag>({
  name: {
    type: String,
    required: true,
  },
});

export const TagModel = model<ITag>("Tags", TagSchema);
