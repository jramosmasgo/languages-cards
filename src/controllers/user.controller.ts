import { ApplicationResponse } from "@core/index";
import { IUser } from "@interfaces/index";
import {
  UpdateUserService,
  createUserService,
  getUserService,
} from "@services/index";
import { Response, Request, NextFunction } from "express";

export const createUserController = async (
  req: Request<{}, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await createUserService(req.body);
    new ApplicationResponse(res).sendSuccess<IUser>(newUser, 201);
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: Request<{}, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await UpdateUserService(req.body);
    new ApplicationResponse(res).sendSuccess<IUser>(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const getUserByField = async (
  req: Request<{}, {}, any>,
  res: Response,
  next: NextFunction
) => {
  try {
    const foundUser = await getUserService(req.body);
    new ApplicationResponse(res).sendSuccess<IUser>(foundUser);
  } catch (error) {
    next(error);
  }
};
