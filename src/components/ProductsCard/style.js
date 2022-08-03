import styled from "styled-components";

const Card = styled.li`
  width: 30%;
  height: 300px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-gray-20);
  border-radius: 8px;
  background-color: var(--color-gray-20);

  img {
    width: 100%;
    height: 48%;
    border-radius: 8px 8px 0 0;
    align-self: center;
    background-color: var(--color-gray-0);
  }

  div {
    height: 52%;
    padding: 10px;
    /* background-color: var(--color-gray-20); */
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border-radius: 0 0 8px 8px;
  }

  span {
    color: var(--color-primary);
  }


  @media screen and (min-width: 768px) {
    width: 45%;
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
 }

`;

export default Card