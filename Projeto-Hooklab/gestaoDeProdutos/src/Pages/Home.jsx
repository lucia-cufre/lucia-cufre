import React from "react";
import { useNavigate } from "react-router-dom";
import { productsPage } from "../Routes/coordinator";
import { ContainerHome } from "./styled";

export default function Home() {
  const navigate = useNavigate();

  return (
    <ContainerHome>
      <h1>Gestão de Produtos</h1>
      <div>
        <button onClick={() => productsPage(navigate)}>Entrar</button>
      </div>
    </ContainerHome>
  );
}
