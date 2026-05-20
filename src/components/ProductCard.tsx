import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleAddToCart = () => {
    setCartQuantity(cartQuantity + 1);
    setIsAdded(true);
  };

  const handleRemoveFromCart = () => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
      if (cartQuantity - 1 === 0) {
        setIsAdded(false);
      }
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">${price} USD</p>

      <div className="cart-controls">
        {cartQuantity > 0 && (
          <div className="quantity-counter">
            <button onClick={handleRemoveFromCart}>-</button>
            <span className="quantity">{cartQuantity}</span>
            <button onClick={handleAddToCart}>+</button>
          </div>
        )}

        <button
          className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
