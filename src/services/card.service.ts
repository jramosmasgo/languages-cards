import { ApplicationError } from "@core/ApplicationError";
import { ICard } from "@interfaces/index";
import { CardModel } from "@models/index.model";
import { DeckModel } from "@models/index.model";

export const createCard = async (card: ICard): Promise<ICard> => {
  try {
    return await CardModel.create(card);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "create card");
  }
};

export const updateCard = async (
  card: Partial<ICard>,
  idCard: string
): Promise<ICard> => {
  try {
    const updatedCard = await CardModel.findByIdAndUpdate(idCard, card, {
      new: true,
    });
    if (!updatedCard) throw new Error("card not found");
    return updatedCard;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "update card");
  }
};

export const getCardByField = async (card: Partial<ICard>): Promise<ICard> => {
  try {
    const foundCard = await CardModel.findOne(card);
    if (!foundCard) throw new Error("card not found");
    return foundCard;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "found card");
  }
};

export const getCardsByField = async (
  card: Partial<ICard>
): Promise<ICard[]> => {
  try {
    const foundCard = await CardModel.find(card);
    if (!foundCard) throw new Error("card not found");
    return foundCard;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "found card");
  }
};

export const deleteCard = async (idCard: string): Promise<any> => {
  try {
    return await DeckModel.findByIdAndDelete(idCard);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "delete card");
  }
};
