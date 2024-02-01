import styled from "styled-components";

export const HomeHeader = styled.header`
  display: block;
  width: 100%;
`;

export const ProfileCard = styled.div`
  position: relative;
  display: flex;
  border-radius: 8px;
  gap: 2rem;

  .avatar {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    object-fit: cover;
  }

  .blogerInfo {
    position: relative;
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6rem;

    h1 {
      font-size: 1.5rem;
      color: ${(props) => props.theme["base-title"]};
      margin-bottom: 8px;
    }

    .footer {
      position: absolute;
      gap: 1.5rem;
      display: flex;
      bottom: 0;

      div {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }
`;



export const BlogSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin: 3rem 0;
  width: 100%;
  gap: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
