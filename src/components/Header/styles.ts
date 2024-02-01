import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: relative;

  .header-art {
    width: 100%;
    height: 269px;
    object-fit: cover;
  }

  .logo {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  z-index: -1;
`;

