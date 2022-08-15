//GET

const listaProdutos = () => fetch("http://localhost:3000/produto").then(resposta => resposta.json())

// POST

const criaProdutos = (name, imageUrl,price ) => {
    return fetch("http://localhost:3000/produto", {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            name, 
            imageUrl,
            price
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error("Não foi possivel criar o produto")
    })
}
// DELET

const deletaProdutos = (id, name, imageUrl,price ) => {
    return fetch("http://localhost:3000/produto", {
        method: "DELETE",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            id,
            name, 
            imageUrl,
            price
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }  
    })
}
export const produtoServices = {
    listaProdutos,
    criaProdutos,
    deletaProdutos
}

