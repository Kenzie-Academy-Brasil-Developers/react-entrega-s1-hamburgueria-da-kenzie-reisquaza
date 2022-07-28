import Card from "./style";

const ProductsCard = ({ addCart, name, category, price, img }) => {
  return (
    <Card>
      <img src={img} alt={name} />
      <div>
        <h3>{name.substring(0,18)}</h3>
        <p>{category}</p>
        <span>R$ {price.toFixed(2)}</span>
        <button onClick={addCart}>Adicionar</button>
      </div>
    </Card>
  );
};

export default ProductsCard;
