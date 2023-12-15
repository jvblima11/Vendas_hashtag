import { AdicionarCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${
      produtoCatalogo.feminino ? "feminino" : "masculino"
    }' id="card-produto-${produtoCatalogo.id}">
              <img class="rounded-lg group-hover:scale-110 duration-300 my-3" src="./assets/img/${
                produtoCatalogo.imagem
              }" alt="Imagem do produto 1"/>
              <p class='text-sm' >${produtoCatalogo.marca}</p>
              <p class='text-sm'>${produtoCatalogo.nome}</p>
              <p class='text-sm'>$${produtoCatalogo.preco}</p>
              <button id="adicionar-${
                produtoCatalogo.id
              }" class="bg-slate-950 text-slate-200 hover:bg-slate-700 duration-200"><i class="fa-solid fa-circle-plus"></i></button>
            </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
    // document.getElementById(`adicionar-${produtoCatalogo.id}`)
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => AdicionarCarrinho(produtoCatalogo.id));
  }
}
