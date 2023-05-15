import { IDeck } from "@interfaces/index";
import { model, Schema, Types } from "mongoose";

const deckSchema = new Schema<IDeck>({
  userId: {
    type: String,
    required: true,
    ref: "Users",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  public: {
    type: Boolean,
    default: false,
  },
  language: {
    type: String,
    required: true,
  },
});

export const DeckModel = model<IDeck>("Decks", deckSchema);
