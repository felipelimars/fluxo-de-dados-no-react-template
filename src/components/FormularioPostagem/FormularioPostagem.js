import { useState } from "react";
import {
  FormContainer,
  Form,
  Input,
  StyledLabel
} from "./FormularioPostagem.styled";

export const FormularioCadastro = ({
  imagem,
  descricao,
  setPhoto,
  setDescription,
  titulo,
  setTitulo
}) => {
  // estados

  // funções
  const handlePhoto = (event) => {
    setPhoto(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleTitulo = (event) => {
    setTitulo(event.target.value);
  };


  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" onChange={handleTitulo} value={titulo} />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={handlePhoto} value={imagem} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={handleDescription} value={descricao} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;