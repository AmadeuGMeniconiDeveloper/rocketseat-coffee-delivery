import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { CoffeeOrderProvider } from "./contexts/CoffeeOrderProvider";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeOrderProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeeOrderProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
