import { produtoServices } from "../servicos/produto-servicos.js";

const from = document.querySelector("[data-form]");

from.addEventListener("submit" , (evento) => {
    evento.preventDefault();

    const name = document.querySelector("[data-name]").value
    const url = document.querySelector("[data-url]").value
    const price = document.querySelector("[data-price]").value
  
    produtoServices.criaProdutos(name, url, price).them(resposta => {
        window.location.pathname = "/cria-produtos-controller.html"
        console.log(resposta)
    }).catch(err => {
        console.log(err)
    })
})

from.addEventListener("submit" , (evento) => {
    evento.preventDefault();

    const name = document.querySelector("[data-name]").value
    const url = document.querySelector("[data-url]").value
    const price = document.querySelector("[data-price]").value
  
    produtoServices.deletaProdutos(name, url, price).them(resposta => {
        window.location.pathname = "/cria-produtos-controller.html"
        console.log(resposta)
    }).catch(err => {
        console.log(err)
    })
})