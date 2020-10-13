import React from 'react';
import { render , unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils";

import FilterProduct from "../components/basic/filter-product";

var categories = ["ALIMENTO", "HIGIENE", "ACESSORIOS", "BRINQUEDOS"];

let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Testar componente de filtragem quando é passado o plural_name", () => {
    act(()=>{
        render(
        <FilterProduct plural_name="Categorias" categories={categories} />, container);
    });

    expect(container.querySelector("label").textContent).toBe(" Filtrar por Categorias: ");
})

it("Testar componente de filtragem quando não é passado o plural_name", () => {
    act(()=>{
        render(
        <FilterProduct categories={categories} />, container);
    });

    expect(container.querySelector("label").textContent).toBe(" Filtrar ");
})

it("Testar default da filtragem", () => {
    act(()=>{
        render(
        <FilterProduct singular_name="categoria" categories={categories} />, container);
    });

    expect(container.querySelector("option").textContent).toBe("Selecione uma categoria");
})