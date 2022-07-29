import CartCard from "./style";

const ProductsCardCart = ({ img, name, category, removeCart, id }) => {
  return (
    <CartCard>
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{category}</p>
      </div>
      <button onClick={() => removeCart(id)}>Remover</button>
    </CartCard>
  );
};

export default ProductsCardCart;
