import { Request, Response } from "express";

export const loginUser = (req: Request, res: Response) => {
  const { username, email } = req.body;
  return res.json({
    message: "Login successful",
    user: {
      username: username,
      email: email,
    },
  });
};
