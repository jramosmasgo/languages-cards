import { ApplicationResponse } from "@core/ApplicationResponse";
import { IDeck } from "@interfaces/deck.interface";
import {
  createDeck,
  deleteDeckById,
  getAllDecksByField,
  getOneDeckByField,
  updateDeck,
} from "@services/index";
import { NextFunction, Request, Response } from "express";

export const createDeckController = async (
  req: Request<{}, {}, IDeck>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newDeck = await createDeck(req.body);
    new ApplicationResponse(res).sendSuccess<IDeck>(newDeck, 201);
  } catch (error) {
    next(error);
  }
};

export const updateDeckController = async (
  req: Request<{ id: string }, {}, Partial<IDeck>>,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedDeck = await updateDeck(req.params.id, req.body);
    new ApplicationResponse(res).sendSuccess<IDeck>(updatedDeck);
  } catch (error) {
    next(error);
  }
};

export const getOneDeckController = async (
  req: Request<{}, {}, Object>,
  res: Response,
  next: NextFunction
) => {
  try {
    const founddeck = await getOneDeckByField(req.body);
    new ApplicationResponse(res).sendSuccess<IDeck>(founddeck);
  } catch (error) {
    next(error);
  }
};

export const getAllDecksController = async (
  req: Request<{}, {}, Object>,
  res: Response,
  next: NextFunction
) => {
  try {
    const founddecks = await getAllDecksByField(req.body);
    new ApplicationResponse(res).sendSuccess<IDeck[]>(founddecks);
  } catch (error) {
    next(error);
  }
};

export const deleteDeckController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleteDeck = await deleteDeckById(req.params.id);
    new ApplicationResponse(res).sendSuccess<boolean>(deleteDeck);
  } catch (error) {
    next(error);
  }
};
