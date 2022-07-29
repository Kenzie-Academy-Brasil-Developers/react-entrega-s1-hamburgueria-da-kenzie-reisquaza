const ProductsCardCart = ({ img, name, category, removeCart, id }) => {
  return (
    <li>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
      </div>
      <button onClick={() => removeCart(id)}>Remover</button>
    </li>
  );
};

export default ProductsCardCart;
