/*1) Dado o array: [30,30,40,5,223,2049,3034,5], retorne outro array apenas com valores únicos*/
const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; //sem os ... você estará colocando o set dentro de um array, mas, se você quer que os elementos do set se tornam elementos do array, coloque o ... (scratch)
}

console.log(valoresUnicos(meuArray));