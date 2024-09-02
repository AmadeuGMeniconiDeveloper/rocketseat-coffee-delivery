import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes/light";
// import { darkTheme } from "./styles/themes/dark";
import { GlobalStyles } from "./styles/global";
import { CoffeeOrderProvider } from "./contexts/CoffeeOrderProvider";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
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
