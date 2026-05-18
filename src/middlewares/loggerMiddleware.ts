import { Request, Response, NextFunction } from "express";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const startTime = Date.now();
  const method = req.method;
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;

    console.log(
      `[${new Date().toISOString()} ${method} ${path} - ${statusCode} - ${duration}ms`,
    );
  });

  next();
};
