import styled from "styled-components";

const Cart = styled.ul`
  width: 28%;
  height: 465px;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background-color: var(--color-gray-20);

  div {
    overflow-y: auto;
  }

  h3 {
    width: 100%;
    padding: 15px;
    text-align: center;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    color: var(--color-gray-0);
    background-color: var(--color-primary);
  }
`;

export default Cart;
