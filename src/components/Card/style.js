import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #cfefef;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 8px;
  font-size: 13px;
  box-shadow: 0 2px 4px #8fafaf;
  border-top: 10px solid #bfdfdf;
  cursor: grab;

  header {
    position: absolute;
    top: -16px;
    left: 8px;
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

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 14px;
      border-radius: 8px;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 24px;
  height: 4px;
  display: inline-block;
  border-radius: 2px;
  background: ${(props) => props.color};
`;
