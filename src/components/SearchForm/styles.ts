import styled from "styled-components";

export const SearchArea = styled.form`
  position: relative;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4.5rem;
    margin-bottom: 12px;

    h2 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.12rem;
    }

    span {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 0.875;
    }
  }

  input {
    width: 100%;
    padding: 12px 16px;
    color: ${(props) => props.theme["base-label"]};
    outline: none;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background: ${(props) => props.theme["base-input"]};
  }

  button {
    position: absolute;
    right: 0.8rem;
    bottom: 10px;
    padding: 3px 10px;
    border: none;
    border-radius: 4px;
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
