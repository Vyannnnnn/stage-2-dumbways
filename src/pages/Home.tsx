import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
      <section className="h-screen overflow-y-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white py-[20%] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-8 text-blue-100">
            Discover amazing products at great prices
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
  );
}
