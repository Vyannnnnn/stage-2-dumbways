import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  price: z.coerce.number().min(0, "Price must be a non-negative number"),
  stock: z.coerce.number().min(0, "Stock must be a non-negative number"),
  image: z.string().optional(),
});
