import styled from "styled-components";

const Card = styled.li`
  width: 200px;
  height: 300px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color-gray-20);
  border-radius: 5px;
  background-color: var(--color-gray-20);

  img {
    width: 125px;
    height: 48%;
    align-self: center;
  }

  div {
    height: 52%;
    padding: 10px;
    background-color: var(--color-gray-0);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  span {
    color: var(--color-primary);
  }
`;

export default Card