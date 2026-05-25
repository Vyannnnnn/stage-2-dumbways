import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthProvider";
import { useAuth } from "./hooks/useAuth";
import PrivateRoute from "./lib/PrivateRoute";

function Navbar() {
  const { token, logout } = useAuth();
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Andre's Store
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="hover:bg-gray-100 transition-colors"
            >
              <Link
                to="/"
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="hover:bg-gray-100 transition-colors"
            >
              <Link
                to="/products"
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                Products
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="hover:bg-gray-100 transition-colors relative"
            >
              <Link
                to="/cart"
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                Cart
              </Link>
            </Button>
            {token && (
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="hover:bg-gray-100 transition-colors relative"
              >
                <Link
                  to="/dashboard"
                  className="font-medium text-gray-700 hover:text-blue-600"
                >
                  Dashboard
                </Link>
              </Button>
            )}

            {token ? (
              <Button
                size="lg"
                variant="destructive"
                className="hover:bg-red-100 transition-colors"
                onClick={logout}
              >
                Logout
              </Button>
            ) : (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hover:bg-blue-100 transition-colors"
              >
                <Link to="/login" className="font-medium text-gray-700">
                  Login
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
