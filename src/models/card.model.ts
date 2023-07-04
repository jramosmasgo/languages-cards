import { ICard } from "@interfaces/card.interface";
import { model, Schema, Types } from "mongoose";

const CardSchema = new Schema<ICard>({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: Types.ObjectId,
    required: true,
    ref: "Users",
  },
  back: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  examples: {
    type: [String],
  },
});

export const CardModel = model<ICard>("Cards", CardSchema);
