import { Response, Request, NextFunction } from "express";
import { ApplicationResponse } from "@core/index";

export const errorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  new ApplicationResponse(res).sendError(err, err.statusCode ?? 500);
};
