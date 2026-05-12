import { Request, Response } from "express";

export const getUser = (req: Request, res: Response) => {
  return res.json({
    message: "User fetched successfully"
  });
};