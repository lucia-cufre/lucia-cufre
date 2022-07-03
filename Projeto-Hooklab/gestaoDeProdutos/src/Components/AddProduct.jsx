import React from "react";
import useForm from "../hooks/useForm";
import { Form } from "./styled";

export default function AddProduct(props) {
  const { form, onChange, cleanFields } = useForm({
    nome: "",
    marca: "",
    preço: "",
    id: Date.now(),
  });

  const submit = (event) => {
    cleanFields();
    event.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={submit}>
        <input
          name={"nome"}
          value={form.nome}
          onChange={onChange}
          placeholder="Nome do Produto"
          required
        />
        <input
          name={"marca"}
          value={form.marca}
          onChange={onChange}
          placeholder="Marca do Produto"
          required
        />
        <input
          name={"preço"}
          value={form.preço}
          onChange={onChange}
          placeholder="Preço"
          type={"number"}
          required
        />

        <button
          onClick={() => {
            props.addProduto(form);
          }}
        >
          Adicionar Produto
        </button>
      </Form>
    </div>
  );
}
