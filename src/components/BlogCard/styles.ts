import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
  padding: 2rem;
  line-height: 1.6rem;
  margin: auto;
  height: 16.25rem;
  overflow: hidden;

  border-radius: 10px;
  background-color: ${(props) => props.theme["base-post"]};
  border: 2px solid ${(props) => props.theme["base-post"]};
  transition: 0.2s;

  a {
    color: ${(props) => props.theme["base-text"]};
    text-decoration: none;
  }

  .mark-dwown-card {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    img {
      display: none;
    }
  }

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme["base-label"]};
  }

  .cardHead {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    h1 {
      width: 15rem;
      height: 3rem;
      color: ${(props) => props.theme["base-title"]};
      font-size: 20px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      color: ${(props) => props.theme["base-span"]};
    }
  }
`;
