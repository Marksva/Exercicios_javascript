/*
let num = [5, 8, 2, 9, 3]
num.sort() // colocando em ordem crescendo 
num.push(1) // adicionando elemento na ultima posição do array 

console.log(num) // exibindo array 
console.log(`O vetor tem ${num.length} posições!`) // exibindo tamanho do array 
console.log(`O primeiro valor do vetor é ${num[0]}`) // exibindo elemento especifico do array
console.log('--------------------------------------')
*/




//for normal
/*
let valores = [8, 1, 7, 4, 2, 9]
// console.log(valores[0]) // >>>maneira burra de fazer
// console.log(valores)   // >>>>Exibi o array formato padrão 

for(var i=0; i < valores.length; i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}
*/




// for in 
/*
for(var i in valores ){
    console.log(`${valores[i]}`)
}
*/



let num = [4, 5, 6, 7, 8]
let ps
ps = num.indexOf(4)// fala qual localização o numero está no array, se não tiver o numero é "-1
if (ps == -1) { 
    console.log('o valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${ps}`)
}
 


