// Listas
// índice: sempre começa com 0
//                     0            1          2           3      
const lanches = ["X-Beronha", "X-Ratão", "X-Cachoro", "X-Podrão"]
const valores = [   7       ,      5   ,      9999  ,      31   ]
let contador = 0 // variável de início
while(contador <= lanches.length){ // condição de parada
    console.log(lanches[contador] + " - R$" + valores[contador])
    contador = contador + 1 // controle de laço
}
// adcionar novos elementos na lista
lanches.push("X- Sapão")
valores.push(25)
console.log(lanches)
// Remover o último
lanches.pop()
valores.pop()
console.log(lanches)
// Remover um item específico ou adcionar
lanches.splice(2, 1) // remove a partir do índice 2, 1 elemento só
console.log(lanches)
lanches.splice(2, 2) // remove a partir do 2, 2 elementos
console.log(lanches)
lanches.splice(0, 1, "X-Sapão") // remove o índice 2 e adciona um novo 
console.log(lanches)