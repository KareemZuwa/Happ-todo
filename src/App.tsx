import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Container } from "./styles/styles";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
}

export default App;
