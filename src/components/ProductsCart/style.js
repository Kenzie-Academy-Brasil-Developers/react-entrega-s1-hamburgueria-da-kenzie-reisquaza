import styled from "styled-components";

export const Cart = styled.ul`
  width: 32%;
  max-height: 450px;
  margin-left: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background-color: var(--color-gray-0);

  div {
    margin-top: 10px;
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

  p {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 45%;
  }
  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

export const Cards = styled.div`
  padding: 10px;
  margin: 5px;

  width: 100%;
  max-height: 300px;
  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid var(--color-gray-50);
`;

export const Button = styled.button`
  padding: 10px;
  width: 90%;
  border: none;
  border-radius: 8px;
  background: var(--color-gray-20);
  color: var(--color-gray-50);
`;
