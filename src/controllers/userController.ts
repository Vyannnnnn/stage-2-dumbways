import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
  } catch (error: any) {
    error.message = "Failed to create user";
    next(error);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await prisma.user.findMany();
    return res
      .status(200)
      .json({ message: "Users fetched successfully", data: users });
  } catch (error: any) {
    error.message = "Failed to fetch users";
    next(error);
  }
};

export const transferPoints = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { senderId, receiverId, points } = req.body;

    const [sender, receiver] = await Promise.all([
      prisma.user.findUnique({ where: { id: senderId } }),
      prisma.user.findUnique({ where: { id: receiverId } }),
    ]);

    if (!sender) {
      const error: any = new Error("Sender not found");
      error.statusCode = 404;
      throw error;
    }

    if (!receiver) {
      const error: any = new Error("Receiver not found");
      error.statusCode = 404;
      throw error;
    }

    await prisma.$transaction(async (tx) => {
      const senderInTx = await tx.user.findUnique({
        where: { id: senderId },
      });

      if (!senderInTx || senderInTx.points < points) {
        const error: any = new Error("Insufficient points after transaction started");
        error.statusCode = 400;
        throw error;
      }

      await tx.user.update({
        where: { id: senderId },
        data: { points: { decrement: points } },
      });

      await tx.user.update({
        where: { id: receiverId },
        data: { points: { increment: points } },
      });
    });

    return res.status(200).json({ message: "Points transferred successfully" });
  } catch (error: any) {
    next(error);
  }
};
