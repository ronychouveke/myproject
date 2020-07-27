// OK 1) Preciso armazenar todos os animais da minha clínica 
// OK 2) Preciso armazenar todos os sintomas que os animais tem
// OK 3) Preciso falar quando um animal foi tratado
let animais = []
function cadastrarAnimal(nomeDoAnimal, especie, sintomas) {
    let animal = {
        nome: nomeDoAnimal,
        especie: especie,
        sintomas: sintomas,
        tratado: false
    }

    animais.push(animal)
}

const acharAnimalPorEspecie = function(especie) {
    for(let i=0;i<animais.length;i++) {
        let animal = animais[i]
        //let textoTratado = ''
        //if(animal.tratado) {
        //    textoTratado = 'Foi tratado'
        //} else {
        //    textoTratado = 'Não foi tratado'
        //}
        if(animal.especie == especie) {
            console.log('Nome: ' + animal.nome + ' | Espécie: ' + animal.especie + ' | Sintomas: ' + animal.sintomas.join(', ') + ' | Tratado: ' + (animal.tratado ? 'Foi tratado' : 'Não foi tratado'))
        }
    }
}
function informarQueAnimalFoiTratado(nome) {
    // As duas formas fazem literalmente a mesma coisa, só muda a forma de escrever
    //for(let i=0;i<animais.length;i++) {
    //    if(animais[i].nome == nome) {
    //        animais[i].tratado = true
    //    }
    //}
    animais.forEach(function(animal) {
        if(animal.nome == nome) {
            animal.tratado = true
        }
    })
}

cadastrarAnimal('Toto', 'cachorro', ['tontura', 'vômito', 'febre'])
cadastrarAnimal('Belinha', 'cachorro', ['tontura', 'vômito', 'febre'])
cadastrarAnimal('Loro', 'papagaio', ['febre'])
//acharAnimalPorEspecie('cachorro')
informarQueAnimalFoiTratado('Belinha')
console.log(animais)