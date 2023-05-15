import { Types } from "mongoose";

export interface IDeck {
  userId: string;
  name: string;
  description: string;
  public: boolean;
  language: string;
}
