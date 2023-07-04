import { ObjectIdMongoose } from "./general.interface";

export interface ICard {
  _id?: string;
  userId: ObjectIdMongoose;
  title: string;
  back: string;
  imageUrl: string;
  examples: string[];
}
