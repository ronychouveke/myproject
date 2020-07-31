// var dobro = numero => numero*2
// var triplo = number => number *3
// var aplicar = (valor, callback) => {
//        return callback(valor)
// }
// console.log(aplicar(2,triplo))
function naoPareDeContarImparesAte(numero){
    let array= []
       for (var i=1; i<=numero;i+=2){
           array.push(i)
       }return array.length
    }
    console.log(naoPareDeContarImparesAte(25))