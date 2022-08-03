import styled from "styled-components";

const Filter = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99%;

  input {
    margin: 5px;
    padding: 10px;
    width: 72%;

    border: 2px solid var(--color-gray-0);
    border-radius: 8px;
  }

  input:focus {
    border: 2px solid var(--color-gray-50);
  }

  @media screen and (min-width: 768px) {
    width: 45%;

    input {
      width: 72%;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 41%;
  }

  @media screen and (min-width: 1440px) {
    width: 34%;
  }
`;
export default Filter;
