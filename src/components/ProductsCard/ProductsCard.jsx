import { Button } from "../../styles/button";
import Card from "./style";

const ProductsCard = ({ cart, setCart, id, product, products }) => {
  const addCart = () => {
    const findProduct = products.find((product) => product.id === id);
    const findProductCart = cart.find((product) => product.id === id);

    if (findProduct !== undefined && findProductCart === undefined) {
      setCart([...cart, findProduct]);
    }
  };

  return (
    <Card>
      <img src={product.img} alt={product.name} />
      <div>
        <h3>{product.name.substring(0, 18)}</h3>
        <p>{product.category}</p>
        <span>R$ {product.price.toFixed(2)}</span>
        <Button onClick={() => addCart()}>Adicionar</Button>
      </div>
    </Card>
  );
};

export default ProductsCard;
