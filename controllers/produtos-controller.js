import { produtoServices } from "../servicos/produto-servicos.js";

const novoProduto = (name, imageUrl,price) => {
    const card = document.createElement("div");
    const conteudo = `
    <div class="prod-holder">
        <div class="produto">
            <img src=${imageUrl} alt="img">
            <h1>${name}</h1>
            <p class="preco">${price}</P>
            <a href="">${name}</a>
        </div>
    </div>
    `

    card.innerHTML = conteudo
    return card
}

const produtos = document.querySelector("[data-product]")

const render = async () => {
    try{
        const listaProdutos = await produtoServices.listaProdutos()
        listaProdutos.forEach(elemento => {
            produtos.appendChild(novoProduto(elemento.name, elemento.imageUrl, elemento.price))
        });
    }
    catch(erro){
        console.log(erro)
    }
}
render()
