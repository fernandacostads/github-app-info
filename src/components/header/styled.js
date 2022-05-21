import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  rigth: 10px;
  padding: 4px;
  justify-content: flex-end;
  input {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 8px;
    font-weight: 500;
    color: grey;
    font-size: 14px;
  }

  button {
    background-color: #2c5282;
    padding: 8px 16px;
    margin: 0 9px;
    border-radius: 6px;
    font-size: 14px;
    
    &:hover {
      background-color: black;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
