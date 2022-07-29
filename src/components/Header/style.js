import styled from "styled-components";

const HeaderMain = styled.header`
width: 100vw;
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

export default HeaderMain;
