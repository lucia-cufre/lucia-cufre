import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { homePage } from "../Routes/coordinator";
import AddProduct from "../Components/AddProduct";
import CardProduto from "../Components/ProductLine";
import { ContainerProducts } from "./styled";

export default function ProductsList() {
  const [listProducts, setListProducts] = useState([]);
  const [isInEditMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("product"));
    if (products.length) {
      setListProducts(products);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(listProducts));
  }, [listProducts]);

  const onClickAdd = (newProduct) => {
    const newList = [...listProducts, newProduct];
    setListProducts(newList);
    alert("Produto cadastrado.");
  };

  const changeEditMode = () => {
    setEditMode(!isInEditMode);
  };

  const listProductsMap = listProducts.map((produto) => {
    return (
      <div key={produto.id}>
        {isInEditMode ? (
          <div>
            <input type="text" defaultValue={produto.nome} />
            <input type="text" defaultValue={produto.marca} />
            <input type="number" defaultValue={produto.preço} />
            <button onClick={() => changeEditMode()}>x</button>
            <button>Ok</button>
          </div>
        ) : (
          <div>
            <CardProduto
              id={produto.id}
              nome={produto.nome}
              marca={produto.marca}
              preço={produto.preço}
              arr={listProducts}
              set={setListProducts}
              onClick={() => changeEditMode()}
            />
          </div>
        )}
      </div>
    );
  });

  return (
    <ContainerProducts>
      <button onClick={() => homePage(navigate)}>Sair</button>
      <AddProduct addProduto={onClickAdd} set={setListProducts} />
      <div>
        <div>
          <h3>Produtos Cadastrados</h3>
        </div>
        {listProducts.length > 0 ? (
          [listProductsMap]
        ) : (
          <p>Não existem produtos cadastrados</p>
        )}
      </div>
    </ContainerProducts>
  );
}
