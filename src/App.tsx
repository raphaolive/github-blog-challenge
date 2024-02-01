import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { FetchContextProvider } from "./contexts/FetchContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <FetchContextProvider>
          <Router />
        </FetchContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
