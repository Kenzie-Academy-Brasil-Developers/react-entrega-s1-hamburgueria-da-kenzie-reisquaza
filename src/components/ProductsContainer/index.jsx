import ProductsList from "../ProductsList";
import Container from "./style";
import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductsCart from "../ProductsCart";
import ProductsFilter from "../ProductsFilter";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <ProductsFilter />
      <ProductsList products={products} />
      <ProductsCart />
    </Container>
  );
};

export default ProductsContainer;
