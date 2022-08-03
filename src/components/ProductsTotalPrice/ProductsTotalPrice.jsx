import TotalPrice from "./style";

const ProductsTotalPrice = ({ cart }) => {
  const totalPrice = cart.reduce((oldValue, newValue) => {
    return oldValue + newValue.price;
  }, 0);

  return (
    <TotalPrice>
      <h4>Total</h4>
      <span>R$ {totalPrice.toFixed(2)}</span>
    </TotalPrice>
  );
};

export default ProductsTotalPrice;
