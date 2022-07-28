import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductsCard from "../ProductsCard";
import Container from "../../styles/container";
import List from "./style";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <Container>
      <List>
        {products.map(({ name, id, price, category, img }) => {
          return (
            <ProductsCard
              key={id}
              name={name}
              price={price}
              category={category}
              img={img}
            />
          );
        })}
      </List>
    </Container>
  );
};

export default ProductsList;
