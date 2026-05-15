import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    return res
      .status(201)
      .json({ message: "User created successfully", data: newUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to create user", error: error });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    return res
      .status(200)
      .json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to fetch users", error: error });
  }
};
