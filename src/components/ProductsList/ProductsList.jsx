import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductsCard from "../ProductsCard";
import Container from "../../styles/container";
import List from "./style";
import ProductsCart from "../ProductsCart";
import Header from "../Header";
import ProductsFilter from "../ProductsFilter";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header>
        <ProductsFilter
          products={products}
          setProducts={setProducts}
          filterProducts={filterProducts}
          setFilterProducts={setFilterProducts}
        />
      </Header>
      <Container>
        <List>
          {filterProducts.length === 0
            ? products.map(({ name, id, price, category, img }) => {
                return (
                  <ProductsCard
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    category={category}
                    img={img}
                    cart={cart}
                    setCart={setCart}
                  />
                );
              })
            : filterProducts.map(({ name, id, price, category, img }) => {
                return (
                  <ProductsCard
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    category={category}
                    img={img}
                    cart={cart}
                    setCart={setCart}
                  />
                );
              })}
        </List>

        <ProductsCart cart={cart} setCart={setCart} />
      </Container>
    </>
  );
};

export default ProductsList;
