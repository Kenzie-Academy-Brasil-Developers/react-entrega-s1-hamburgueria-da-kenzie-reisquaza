const ProductsCard = ({ addCart, name, category, price, img }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <span>{price}</span>
      <button onClick={addCart}>Adicionar</button>
    </div>
  );
};

export default ProductsCard;
