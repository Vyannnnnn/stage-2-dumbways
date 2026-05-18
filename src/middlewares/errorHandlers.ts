import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error("[ERROR]", err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    status: "error",
    statusCode: statusCode,
    message: message,
    timestamp: new Date().toISOString(),
  });
};
