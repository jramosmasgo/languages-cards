import { ApplicationError } from "@core/index";
import { IDeck } from "@interfaces/index";
import { DeckModel } from "@models/index.model";

export const createDeck = async (deck: IDeck): Promise<IDeck> => {
  try {
    return await DeckModel.create(deck);
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Create Deck");
  }
};

export const updateDeck = async (
  deckId: string,
  obejct: Partial<IDeck>
): Promise<IDeck> => {
  try {
    const updatedDeck = await DeckModel.findByIdAndUpdate(
      deckId,
      {
        ...obejct,
      },
      { new: true }
    );

    if (!updatedDeck) throw new Error("Deck not found");

    return updatedDeck;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Create Deck");
  }
};

export const getAllDecksByField = async (filter: Object): Promise<IDeck[]> => {
  try {
    return await DeckModel.find({ ...filter });
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Update Deck");
  }
};

export const getOneDeckByField = async (filter: Object): Promise<IDeck> => {
  try {
    const foundDeck = await DeckModel.findOne({ ...filter });
    if (!foundDeck) throw new Error("Deck not found");
    return foundDeck;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Get one deck");
  }
};

export const deleteDeckById = async (id: string): Promise<boolean> => {
  try {
    await DeckModel.deleteOne({ _id: id });
    return true;
  } catch (error: any) {
    throw new ApplicationError(400, error.message, "Delete deck");
  }
};
