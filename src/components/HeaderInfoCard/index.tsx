import { ReactNode } from "react";
import { Box, Container } from "./styles";
import navigation from "../../assets/icons/navigation.svg";
import backArrow from "../../assets/icons/backArrow.svg";
import { NavLink } from "react-router-dom";

type Props = {
  children: ReactNode;
  url: string;
  isPublication?: boolean;
};

export const HeaderInfoCard = ({
  children,
  url,
  isPublication = false,
}: Props) => {
  return (
    <Container>
      <Box>
        {isPublication && (
          <NavLink to="/" className="returnLink">
            <img src={backArrow} alt="return-icon" />
            <p>VOLTAR</p>
          </NavLink>
        )}
        <NavLink to={url} target="_blank" className="githubLink">
          <p>GITHUB</p>
          <img src={navigation} alt="navigation-icon" />
        </NavLink>
      </Box>
      {children}
    </Container>
  );
};
