import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [titulo, setTitulo] = useState("");


  return (
    <>
      <GlobalStyle />

      <Container>
        <FormularioPostagem
          imagem={photo}
          descricao={description}
          setPhoto={setPhoto}
          setDescription={setDescription}
          titulo={titulo}
          setTitulo={setTitulo}
        />

        <TelaDaPostagem 
                  imagem={photo}
                  descricao={description}
                  titulo={titulo}
        />

      </Container>
    </>
  );
}

export default App;