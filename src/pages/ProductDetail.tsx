import { useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { products } from "../data/products";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="bg-gray-100 rounded-lg p-16 text-center mb-8">
          <div className="text-8xl">{product.image}</div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-blue-600 mb-6">
            {product.price}
          </p>
          <p className="text-gray-600 text-lg mb-8">{product.description}</p>
        </div>

        <Button
          size="lg"
          className="w-full text-lg"
          onClick={() => alert("Added to cart!")}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
