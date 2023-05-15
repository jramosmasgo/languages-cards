import { Response } from "express";

export class ApplicationResponse {
  res: Response;

  constructor(res: Response) {
    this.res = res;
  }

  sendSuccess<T>(data: T, code: number = 200) {
    return this.res.status(code).json({
      ok: true,
      data,
      errror: null,
    });
  }

  sendError(error: any, code: number = 500) {
    return this.res.status(code).json({
      ok: false,
      data: null,
      error: error,
    });
  }
}
