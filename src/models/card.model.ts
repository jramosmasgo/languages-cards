import { ICard } from "@interfaces/card.interface";
import { model, Schema } from "mongoose";

const CardSchema = new Schema<ICard>({
  title: {
    type: String,
    required: true,
  },
  back: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: [String],
    ref: "Tags",
  },
  examples: {
    type: [String],
  },
});

export const CardModel = model<ICard>("Cards", CardSchema);
