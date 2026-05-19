import { Request, Response, NextFunction } from "express";
import z from "zod";

export const validateCreateUser = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: "error",
          message: "Validation error! your user data is invalid",
          errors: z.treeifyError(error),
        });
      }

      next(error);
    }
  };
};

export const validateCreateProduct = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: "error",
          message: "Validation error! your product data is invalid",
          errors: z.treeifyError(error),
        });
      }

      next(error);
    }
  };
};

export const validateTransferPoints = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: "error",
          message: "Validation error! your transfer points data is invalid",
          errors: z.treeifyError(error),
        });
      }

      next(error);
    }
  };
};
