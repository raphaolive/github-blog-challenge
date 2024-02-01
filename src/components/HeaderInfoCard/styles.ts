import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  min-height: 168px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: -200px;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  position: relative;

  .githubLink {
    position: absolute;
  }

  .githubLink,
  .returnLink {
    display: flex;
    text-decoration: none;
    z-index: 1;
    display: flex;
    right: 2rem;
    gap: 8px;

    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme["blue"]};

    &:hover {
      cursor: pointer;
      border-bottom: 1px solid ${(props) => props.theme["brand-blue"]};
    }
  }
`;
