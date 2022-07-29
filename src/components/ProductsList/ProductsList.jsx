import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductsCard from "../ProductsCard";
import Container from "../../styles/container";
import { List, Result } from "./style";
import ProductsCart from "../ProductsCart";
import Header from "../Header";
import ProductsFilter from "../ProductsFilter";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    api
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [products]);

  return (
    <>
      <Header>
        <ProductsFilter
          products={products}
          value={value}
          setValue={setValue}
          setFilterProducts={setFilterProducts}
        />
      </Header>
      <Container>
        <List>
          {filterProducts.length === 0 ? (
            products.map((product) => {
              return (
                <ProductsCard
                  key={product.id}
                  id={product.id}
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  products={products}
                />
              );
            })
          ) : (
            <div>
              <Result>
                Resultado para: <p> {value} </p>{" "}
              </Result>

              {filterProducts.map((product) => {
                return (
                  <ProductsCard
                    key={product.id}
                    id={product.id}
                    product={product}
                    cart={cart}
                    setCart={setCart}
                    products={products}
                  />
                );
              })}
            </div>
          )}
        </List>

        <ProductsCart cart={cart} setCart={setCart} />
      </Container>
    </>
  );
};

export default ProductsList;
