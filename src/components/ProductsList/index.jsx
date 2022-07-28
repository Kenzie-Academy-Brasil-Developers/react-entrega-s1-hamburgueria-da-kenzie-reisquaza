import ProductsCard from "../ProductsCard";

const ProductsList = ({ products }) => {
  return (
    <div>
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
    </div>
  );
};

export default ProductsList;
