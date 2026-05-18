import { Request, Response, NextFunction } from "express";

export const apiKeyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const apiKey = req.header("x-api-key");

  if (apiKey !== "ytta") {
    return res.status(401).json({ message: "API key is required" });
  }

  next();
};
