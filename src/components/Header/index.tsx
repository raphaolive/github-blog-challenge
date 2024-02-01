import { HeaderContainer } from "./styles";
import headerArt from "../../assets/header-art.svg";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={logo} className="logo" alt="logo" />
        <img src={headerArt} className="header-art" alt="header-art" />
      </HeaderContainer>
    </>
  );
};
