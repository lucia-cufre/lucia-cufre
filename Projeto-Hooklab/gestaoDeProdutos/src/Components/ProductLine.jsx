import React from "react";
import { Table } from "./styled";

export default function CardProduto(props) {
  const onClickDeleta = (arr, set, idProd) => {
    const copiaListProducts = [...arr];
    const newListProducts = copiaListProducts.filter((produto) => {
      return produto.id !== idProd;
    });
    set(newListProducts);
  };

  return (
    <Table>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Marca</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.nome}</td>
            <td>{props.marca}</td>
            <td>R$ {props.preço}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => {
          onClickDeleta(props.arr, props.set, props.id);
        }}
      >
        Eliminar
      </button>
      <button onClick={props.onClick}>Editar</button>
    </Table>
  );
}
