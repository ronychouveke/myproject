const numeros = [1, 2, 15, 20, 35, 41, 13, 41, 56]

function verificaSeEPar(numeros, callbackVerificaSeEPar) {
    numeros.forEach((numero) => {
        callbackVerificaSeEPar(numero)
    })
}

function ePar(numero) {
    // for(let i=0;i<numeros.length;i++) {
    //     if(numeros[i] % 2 === 0) {
    //         console.log('O número ' + numeros[i] + ' é par')
    //     } else {
    //         console.log('O número ' + numeros[i] + ' não é par')
    //     }
    // }
    if(numero % 2 === 0) {
        console.log('O número ' + numero + ' é par')
        return 'É par'
    } else {
        console.log('O número ' + numero + ' não é par')
        return 'Não é par'
    }
}

verificaSeEPar(numeros, ePar)
verificaSeEPar(numeros, (numero) => {
    if(numero % 2 === 0) {
        console.log('O número ' + numero + ' é par')
        return 'É par'
    } else {
        console.log('O número ' + numero + ' não é par')
        return 'Não é par'
    }
})