
import { produtoServices } from "../servicos/produto-servicos.js";

const from = document.querySelector("[data-form]");


from.addEventListener("submit" , (evento) => {
    evento.preventDefault();

    const name = document.querySelector("[data-name]").value
    const id = document.querySelector("[data-id]").value
    const price = document.querySelector("[data-price]").value
  
    produtoServices.deletaProdutos(id, name, price).them(resposta => {
        window.location.pathname = "/produtos.html"
        console.log(resposta)
    }).catch(err => {
        console.log(err)
    })
})