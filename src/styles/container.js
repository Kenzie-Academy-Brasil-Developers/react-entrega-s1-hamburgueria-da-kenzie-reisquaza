import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 640px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* flex-wrap: wrap; */

 
  @media screen and (min-width: 768px){
    flex-direction: row;
    max-width: 640px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 860px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1020px;
  }
`;

export default Container;
