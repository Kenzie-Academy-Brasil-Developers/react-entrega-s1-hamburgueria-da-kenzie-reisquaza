import styled from "styled-components";

export const HeaderMain = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-gray-20);
  height: 80px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
 
  div h3 {
    margin: 10px 3px 0 3px;
    color: var(--color-secondary);
  }
`;

export const HeaderSearch = styled.form`
  display: flex;
  flex-direction: row;
  background-color: #fcf;
  width: 400px;

  input {
    width: 200px;
  }

  button{
    
  
  }
`; 
 