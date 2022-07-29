import Container from "../../styles/container";
import HeaderMain from "./style";

const Header = ({ children }) => {
  return (
    <HeaderMain>
      <Container>
        <div>
          <h1>Burger</h1>
          <h3>Kenzie</h3>
        </div>

        {children}
      </Container>
    </HeaderMain>
  );
};

export default Header;
