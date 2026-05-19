import { z } from "zod";

export const createUserSchema = z.object({
  email: z.email(),
  password: z.string().refine((val) => val.length >= 8, {
    error: "Password must be at least 8 characters",
  }),
  name: z.string().min(3, "Name must be at least 3 characters long"),
  points: z.coerce
    .number()
    .min(0, "Points must be a non-negative number")
    .optional(),
  profilePicture: z.string().optional(),
});

export const transferPointsSchema = z
  .object({
    senderId: z.coerce.number().int("senderId must be an integer"),
    receiverId: z.coerce.number().int("receiverId must be an integer"),
    points: z.coerce.number().min(1, "Points must be greater than 0"),
  })
  .refine((data) => data.senderId !== data.receiverId, {
    message: "Cannot transfer points to yourself",
  });
