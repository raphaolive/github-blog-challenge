import styled from "styled-components";

export const BlogInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  bottom: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
  }
  .footer {
    display: flex;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const BlogBody = styled.section`
  padding: 2.5rem;
  color: ${(props) => props.theme["base-text"]};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: ${(props) => props.theme["blue"]};
  }

  .code-block {
    background-color: ${(props) => props.theme["base-post"]};
    padding: 1.125rem;
    border-radius: 5px;
    overflow-x: auto;
  }

  code {
    display: block;
    white-space: pre-wrap;
  }

  .mark-down-content{

    code{
      background-color: ${(props) => props.theme["base-post"]};
      border-radius: 8px;
      padding: 2rem;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    img{
      width: 100%;
    }
  }
`;
