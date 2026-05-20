import "./App.css";
import ProductCard from "./components/ProductCard";
import car from "./assets/car.jpg";
import car2 from "./assets/car2.jpg";
import car3 from "./assets/car3.jpg";

function App() {
  return (
    <>
      <ProductCard name="Koenigsegg Jesko" price={4000000} image={car} />
      <ProductCard name="Koenigsegg Jesko" price={4200000} image={car2} />
      <ProductCard name="Koenigsegg Jesko" price={3800000} image={car3} />
    </>
  );
}

export default App;
