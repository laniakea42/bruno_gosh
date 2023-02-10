import { ThemeProvider } from "styled-components";

import { baseTheme } from "@/styles/theme";

import IndexComponent from "./components/index";

function App() {
  return (
    <>
      <ThemeProvider theme={{ baseTheme }}>
        <IndexComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
