import IndexComponent from "./components/index";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "@/styles/theme";


function App() {
  return (
    <ThemeProvider theme={{ baseTheme }}>
      <GlobalStyle />
      <IndexComponent />
    </ThemeProvider>
  );
}

export default App;
