import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, price, stock, description } = req.body;
    const userId = (req as any).user.id;
    const image = req.file ? req.file.filename : null;
    const newProduct = await prisma.product.create({
      data: {
        name,
        price: Number(price),
        stock: Number(stock),
        image,
        description,
        userId: Number(userId),
      },
    });
    return res
      .status(201)
      .json({ message: "Product created successfully", data: newProduct });
  } catch (error: any) {
    error.message = "Failed to create product";
    next(error);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, minPrice, sortBy } = req.query;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: name as string,
          mode: "insensitive",
        },
        price: {
          gte: minPrice ? Number(minPrice) : 0,
        },
      },
      skip: skip,
      take: limit,
      orderBy: {
        createdAt: sortBy === "oldest" ? "asc" : "desc",
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    const totalProducts = await prisma.product.count();
    const totalPages = Math.ceil(totalProducts / limit);

    return res.status(200).json({
      message: "Products fetched successfully",
      meta: {
        current_page: page,
        limit: limit,
        total_pages: totalPages,
      },
      data: products,
    });
  } catch (error: any) {
    error.message = "Failed to fetch products";
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!product) {
      const error: any = new Error("Product not found");
      error.statusCode = 404;
      throw error;
    }
    return res
      .status(200)
      .json({ message: "Product fetched successfully", data: product });
  } catch (error: any) {
    error.message = "Failed to fetch product";
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const image = req.file ? req.file.filename : null;
    const { name, price, stock, description } = req.body;
    const updatedProduct = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        price,
        stock,
        image,
        description,
      },
    });
    return res
      .status(200)
      .json({ message: "Product updated successfully", data: updatedProduct });
  } catch (error: any) {
    error.message = "Failed to update product";
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error: any) {
    error.message = "Failed to delete product";
    next(error);
  }
};
