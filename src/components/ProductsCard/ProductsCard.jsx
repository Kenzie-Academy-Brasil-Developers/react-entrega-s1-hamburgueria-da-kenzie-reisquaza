import { Button } from "../../styles/button";
import Card from "./style";

const ProductsCard = ({ cart, setCart, id, name, category, price, img }) => {
  const addCart = () => {
    const getProductId = cart.length + 1;
    const product = {
      id: getProductId,
      name: name,
      category: category,
      price: price,
      img: img,
    };

    setCart((oldProduct) => [...oldProduct, product]);
  };

  return (
    <Card>
      <img src={img} alt={name} />
      <div>
        <h3>{name.substring(0, 18)}</h3>
        <p>{category}</p>
        <span>R$ {price.toFixed(2)}</span>
        <Button onClick={() => addCart()}>Adicionar</Button>
      </div>
    </Card>
  );
};

export default ProductsCard;
