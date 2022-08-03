import styled from "styled-components";

export const List = styled.ul`
  width: 65%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  list-style: none;
 
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    width: 55%;
  }

  @media screen and (min-width: 1024px) {
 }

`;

export const Result = styled.h2`
  display: flex;
  justify-content: space-between;
`
