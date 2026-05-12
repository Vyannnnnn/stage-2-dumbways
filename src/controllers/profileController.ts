import { Request, Response } from "express";

export const getProfile = (req: Request, res: Response) => {
  const { name } = req.params;
  return res.json({
    message: `Profile for ${name} fetched successfully`,
  });
};
