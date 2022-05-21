import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 20px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 50px;
  height: 200px;

  h1 {
    font-size: 22px;
    font-weight: bold;
  }

  h3 {
    font-size: 14px;
    font-weight: bold;
  }

  h4 {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 14px;
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;
