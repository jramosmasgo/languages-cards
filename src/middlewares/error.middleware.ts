import { Response, Request, NextFunction } from "express";
import { ApplicationResponse } from "@core/index";

export const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  new ApplicationResponse(res).sendError(res, err.statusCode ?? 500);
};
