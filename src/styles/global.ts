import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0px 0px 0px 1px ${(props) => props.theme["blue"]};;
    transition: 0.2s;
  }
  
  body {
    background-color: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-title"]};
  }
  
  
  body, input-security, textarea, button {
    font-family: 'Nunito', sans-serif;
  }
`;
