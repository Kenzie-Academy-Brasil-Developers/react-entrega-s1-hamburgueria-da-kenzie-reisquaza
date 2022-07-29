/* eslint-disable array-callback-return */
import { Button } from "../../styles/button";
import Filter from "./style";

const ProductsFilter = ({ products, setFilterProducts, value, setValue }) => {
  const isEmpty = () => !value.trim().length;

  const searchProduct = (e) => {
    if (isEmpty()) {
      setFilterProducts([]);
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
  };

  return (
    <Filter
      onSubmit={(e) => {
        e.preventDefault();
        searchProduct();
      }}
    >
      <input
        type="text"
        placeholder="Digitar pesquisa"
        onChange={(e) => setValue(e.target.value)}
      />

      <Button>Pesquisar</Button>
    </Filter>
  );
};

export default ProductsFilter;
