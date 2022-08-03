import styled from "styled-components";

const List = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;

  list-style: none;

  overflow-x: auto;

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    width: 55%;
  }

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1440px) {
    width: 60%;
  }
`;

export default List;
