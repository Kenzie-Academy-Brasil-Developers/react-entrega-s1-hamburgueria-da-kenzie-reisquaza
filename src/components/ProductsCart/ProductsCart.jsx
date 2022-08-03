import ProductsCardCart from "../ProductsCartCard/ProductsCartCard";
import ProductsTotalPrice from "../ProductsTotalPrice/ProductsTotalPrice";
import { Button, Cards, Cart } from "./style";

const ProductsCart = ({ cart, setCart }) => {
  const removeProduct = (removeId) => {
    const filterProduct = cart.filter((item) => item.id !== removeId);
    setCart(filterProduct);
  };

  
  const removeAll = () => {
    const removeAllFilter = cart.filter(item => item.id === '')

    setCart(removeAllFilter)
  } 

  return (
    <Cart>
      <h3>Carrinho de compras</h3>

      {cart.length === 0 ? (
        <div>
          <h2>Sua sacola está vazia</h2>
          <p>Adicione itens</p>
        </div>
      ) : (
        <>
          <Cards>
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
          </Cards>
          <ProductsTotalPrice cart={cart} />
          <Button onClick={removeAll} >Remover todos</Button>
        </>
      )}
    </Cart>
  );
};
export default ProductsCart;
