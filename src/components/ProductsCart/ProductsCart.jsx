import ProductsCardCart from "../ProductsCartCard/ProductsCartCard";
import Cart from "./style";

const ProductsCart = ({ cart, setCart }) => {
  const removeProduct = (removeId) => {
    const filterProduct = cart.filter((item) => item.id !== removeId);
    setCart(filterProduct);
  };

  return (
    <Cart>
      <h3>Carrinho de compras</h3>
      <div>
        {cart.map(({ id, name, category, img }) => {
          return (
            <ProductsCardCart
              key={id}
              id={id}
              name={name}
              category={category}
              img={img}
              removeCart={removeProduct}
            />
          );
        })}
      </div>
    </Cart>
  );
};
export default ProductsCart;
