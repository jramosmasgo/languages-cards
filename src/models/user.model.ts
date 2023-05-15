import { IUser } from "@interfaces/index";
import { model, Schema } from "mongoose";

const userSchema = new Schema<IUser>({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firebaseID: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
});

export const UserModel = model<IUser>("Users", userSchema);
