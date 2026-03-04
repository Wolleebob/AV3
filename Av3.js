/*
Imagine que você abriu uma loja:
1) Crie o nome de 8 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/

const roupas = ["Camiseta", "Calça", "Blusa", "Moletom", "Jaqueta", "Tênis", "Sapato", "Shorts"]
const preço =  [    16    ,    18  ,    19  ,     13   ,     22   ,    25  ,    32   ,    9    ]

function mostrarProdutos(){
    let contador = 0 
    while(contador < roupas.length){ 
        console.log(roupas[contador] + " - R$" + preço[contador])
        contador = contador + 1 
    }
}

mostrarProdutos()
function adcionarProdutos(nome,valor){
    roupas.push(nome)
    preço.push(valor)
}
adcionarProdutos("Carteira", 35)



roupas.pop()
preço.pop()
console.log(roupas)

roupas.splice(2, 1) /
console.log(roupas)
roupas.splice(2, 2) 
console.log(roupas)
roupas.splice(0, 1, "Carteira") 
console.log(roupas)


