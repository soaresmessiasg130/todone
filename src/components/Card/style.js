import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #cfefef;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 8px;
  font-size: 13px;
  box-shadow: 0 2px 4px #8fafaf;
  border-top: 10px solid #bfdfdf;

  header {
    position: absolute;
  }

  p {
    font-weight: 500;
    line-height: 14px;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 40%;
    margin-top: 5px;
  }
`;

export const Label = styled.span``;
