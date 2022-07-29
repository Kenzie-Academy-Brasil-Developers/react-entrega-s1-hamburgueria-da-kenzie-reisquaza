import styled from "styled-components";

const Filter = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    margin: 5px;
    padding: 10px;

    border: 2px solid var(--color-gray-0);
    border-radius: 8px;
  }

  input:focus{
    border: 2px solid var(--color-gray-50);
  }
`;
export default Filter;
