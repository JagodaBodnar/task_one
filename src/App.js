import { ThemeProvider } from "styled-components";
import { StyledApp } from "./AppStyles.js";
import { globalStyles } from "./assets/styles/globalStyles";
import MainHeader from "./components/main_header/MainHeader";
import CharactersTable from "./components/table/CharactersTable.js";

function App() {
  return (
    <ThemeProvider theme={globalStyles}>
      <StyledApp>
        <MainHeader>Characters</MainHeader>
        <CharactersTable></CharactersTable>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
