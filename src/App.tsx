import { ThemeProvider } from "styled-components";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Container } from "./styles/styles";
import { theme } from "./styles/theme";
import { useState } from "react";
import { UpdateDialogView } from "./components/UpdateDialogView";
import { Form, Dialog } from "./components/_index";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  
  const handleSubmit = () => {
    console.log("Edited");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          {isDialogOpen && (
            <UpdateDialogView>
              <Form onSubmit={handleSubmit}>
                <Dialog onClose={closeDialog} />
              </Form>
            </UpdateDialogView>
          )}
          <Header />
          <button onClick={openDialog} style={{ width: "200px" }}>
            open dialog
          </button>
          <Main />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
