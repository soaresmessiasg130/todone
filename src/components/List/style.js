import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 280px;
  opacity: ${(props) => (props.done ? 0.7 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 32px;
      height: 32px;
      border-radius: 40%;
      background: #47e284;
      border: 0;
      cursor: pointer;
    }
  }
  ul {
    margin-top: 16px;
  }
`;
