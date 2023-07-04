import { ApplicationResponse } from "@core/ApplicationResponse";
import { ObjectIdMongoose } from "@interfaces/general.interface";
import { ICard } from "@interfaces/index";
import {
  createCard,
  deleteCard,
  getCardByField,
  getCardsByField,
  updateCard,
} from "@services/index";
import { NextFunction, Request, Response } from "express";

export const createCardController = async (
  req: Request<{}, {}, ICard>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCard = await createCard(req.body);
    new ApplicationResponse(res).sendSuccess<ICard>(newCard, 201);
  } catch (error) {
    next(error);
  }
};

export const updateCardController = async (
  req: Request<{ id: string }, {}, Partial<ICard>>,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedCard = await updateCard(req.body, req.params.id);
    new ApplicationResponse(res).sendSuccess<ICard>(updatedCard);
  } catch (error) {
    next(error);
  }
};

export const getCardByIdController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const card = await getCardByField({ _id: req.params.id });
    new ApplicationResponse(res).sendSuccess<ICard>(card);
  } catch (error) {
    next(error);
  }
};

export const getCardByUserIdController = async (
  req: Request<{ userid: ObjectIdMongoose }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const cards = await getCardsByField({ userId: req.params.userid });
    new ApplicationResponse(res).sendSuccess<ICard[]>(cards);
  } catch (error) {
    next(error);
  }
};

export const deleteCardController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const cards = await deleteCard(req.params.id);
    new ApplicationResponse(res).sendSuccess<string>("deleted");
  } catch (error) {
    next(error);
  }
};
