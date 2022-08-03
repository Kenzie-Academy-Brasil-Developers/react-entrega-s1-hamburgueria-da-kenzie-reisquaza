import styled from "styled-components";

const CartCard = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin: 5px;
    width: 70px;
    height: 70px;
    background: var(--color-gray-20);
    border-radius: 8px;
  }

  div {
    padding: 0;
    max-width: 50%;
  }

  button {
    font-size: 12px;
    color: var(--color-gray-50);
    border: none;
    background-color: transparent;
  }
`;

export default CartCard;
