import { ThemeProvider } from "styled-components";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Container } from "./styles/styles";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Main />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
