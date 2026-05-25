import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { api } from "@/services/api";
import PageTitle from "@/components/mycomponents/PageTitle";

type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
  stock: number;
  description: string;
};

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.data || res.data.products || [];
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Our Products"
        desc="Discover our amazing collection of products"
      />

      <section className="max-w-6xl mx-auto py-12 px-4">
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="relative mx-auto w-full max-w-sm pt-0 bg-zinc-100"
              >
                <div className="absolute inset-0 z-30 aspect-video " />
                {product.image ? (
                  <img
                    src={`http://localhost:3000/uploads/${product.image}`}
                    alt={product.name}
                    className="relative z-20 aspect-video w-full object-cover brightness-75 dark:brightness-40"
                  />
                ) : (
                  <div className="relative z-20 aspect-video w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
