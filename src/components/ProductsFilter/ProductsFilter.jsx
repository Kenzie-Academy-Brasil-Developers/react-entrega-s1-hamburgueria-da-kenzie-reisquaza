import { useState } from "react";
import { Button } from "../../styles/button";
import Filter from "./style";

const ProductsFilter = ({ products, setFilterProducts }) => {
  const [value, setValue] = useState("");
  const isEmpty = (str) => !str.trim().length;

  function searchProduct() {
    if (isEmpty(value)) {
      setFilterProducts(products);
    } else {
      const searchValue = value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const productFilter = products.filter((product) => {
        const searchName = product.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        const searchCategory = product.category
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        if (
          searchName.includes(searchValue) ||
          searchCategory.includes(searchValue)
        ) {
          return product;
        }
      });

      setFilterProducts(productFilter);
    }
  }

  return (
    <Filter>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        onChange={(e) => setValue(e.target.value)}
      />

      <Button type="button" onClick={() => searchProduct()}>
        Pesquisar
      </Button>
    </Filter>
  );
};

export default ProductsFilter;
