import Container from "../../styles/container";
import { HeaderMain, HeaderSearch } from "./style";

const Header = () => {
  return (
    <HeaderMain>
      <Container>
        <div>
          <h1>Burger</h1>
          <h3>Kenzie</h3>
        </div>
        <HeaderSearch action="">
          <input type="text" placeholder="Digitar pesquisa" />
          <button> Pesquisar </button>
        </HeaderSearch>
      </Container>
    </HeaderMain>
  );
};

export default Header;
