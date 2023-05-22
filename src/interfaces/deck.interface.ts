import { ObjectIdMongoose } from "./general.interface";

export interface IDeck {
  _id?: string;
  userId: ObjectIdMongoose;
  name: string;
  description: string;
  public: boolean;
  language: string;
  cards: [string];
}
