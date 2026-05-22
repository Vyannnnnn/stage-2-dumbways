import { Link, Outlet } from "react-router-dom";
import { Button } from "../components/ui/button";
import { products } from "../data/products";

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Our Products
          </h1>
          <p className="text-gray-600">
            Discover our amazing collection of products
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <div className="flex-1 text-center py-16 bg-gray-100 flex items-center justify-center">
                <div className="text-7xl">{product.image}</div>
              </div>
              <div className="p-6">
                <Button asChild className="w-full">
                  <Link to={product.id.toString()}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Outlet />
    </div>
  );
}
