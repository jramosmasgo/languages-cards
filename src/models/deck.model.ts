import { IDeck } from "@interfaces/index";
import { model, Schema, Types } from "mongoose";

const deckSchema = new Schema<IDeck>({
  userId: {
    type: Types.ObjectId,
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
  cards: {
    type: [String],
    ref: "Cards",
  },
});

export const DeckModel = model<IDeck>("Decks", deckSchema);
