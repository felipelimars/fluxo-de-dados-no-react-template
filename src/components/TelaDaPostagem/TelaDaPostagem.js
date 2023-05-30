import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

const TelaDaPostagem = ({imagem, descricao, titulo}) => {
  
  return (
    <ContainerPostagem>
      <Title>{titulo ? titulo:"Titulo"}</Title>
      <Image src={imagem ? imagem:"https://picsum.photos/536/354"} />
      <Description>{descricao ? descricao:"Descrição"}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
