// OK 1) Preciso armazenar todos os animais da minha clínica 
// OK 2) Preciso armazenar todos os sintomas que os animais tem
// OK 3) Preciso falar quando um animal foi tratado
// OK 4) Adicionar cobrança e pagamento
// OK 5) Adicionar remédios para o tratamento do animal
// OK 6) Ter animais para adoção
let animais = []
let animaisParaAdocao = {}
let animaisParaAdocaoMacho = []
let animaisParaAdocaoFemea= []

function adotarAnimal(nome) {
    for(let i=0;i<animaisParaAdocaoMacho.length;i++) {
        if(animaisParaAdocaoMacho[i].nome === nome) {
            animaisParaAdocaoMacho.splice(i, 1)
            splice(index, quantidadeQueEuQueroApagar)
        }
    }

    for(let i=0;i<animaisParaAdocaoFemea.length;i++) {
        if(animaisParaAdocaoFemea[i].nome === nome) {
            animaisParaAdocaoFemea.splice(i, 1)
        }
    }
}

function listarAnimaisDisponiveisParaAdocao() {
    const animaisParaAdocao = []
    animaisParaAdocao.push(...animaisParaAdocaoMacho)
    animaisParaAdocao.push(...animaisParaAdocaoFemea)

    animaisParaAdocao.forEach((animal) => {
        console.log('Nome: ' + animal.nome + ' | Especie: ' + animal.especie + ' | Sexo: ' + animal.sexo + ' | Castrado: ' + (animal.castrado ? 'Sim' : 'Não'))
    })
}

function geraObjetoAnimalParaAdocao(nomeDoAnimal, especie, castrado, sexo) {
    return {
        nome: nomeDoAnimal,
        especie: especie,
        castrado: castrado,
        sexo: sexo
    }
}

function cadastraAnimalParaAdocaoMacho(nomeDoAnimal, especie, castrado) {
    let animal = geraObjetoAnimalParaAdocao(nomeDoAnimal, especie, castrado, 'M')
    animaisParaAdocaoMacho.push(animal)
}

function cadastraAnimalParaAdocaoFemea(nomeDoAnimal, especie, castrado) {
    let animal = geraObjetoAnimalParaAdocao(nomeDoAnimal, especie, castrado, 'F')
    animaisParaAdocaoFemea.push(animal)
}

function cadastrarAnimal(nomeDoAnimal, especie, sintomas) {
    let animal = {
        nome: nomeDoAnimal,
        especie: especie,
        sintomas: sintomas,
        tratado: false,
        valorDoTratamento: 0,
        foiPago: false,
        remedios: []
    }

    animais.push(animal)
}

function informarQueAnimalFoiTratado(nome) {
    const indexDoAnimal = acharAnimal(nome, 'nome')
    animais[indexDoAnimal].tratado = true
}

function adicionarValorDoTratamento(nome, valor) {
    const indexDoAnimal = acharAnimal(nome, 'nome')
    animais[indexDoAnimal].valorDoTratamento += valor
}

function informarQueOTratamentoFoiPago(nome) {
    const indexDoAnimal = acharAnimal(nome, 'especie')
    animais[indexDoAnimal].foiPago = true

}

function adicionarRemediosNoTratamento(nome, remedios) {
    const indexDoAnimal = acharAnimal(nome, 'nome')
    animais[indexDoAnimal].remedios.push(...remedios)
}

function acharAnimal(valor, propriedade) {
    for(let i=0;i<animais.length;i++) {
        if(animais[i][propriedade] === valor) {
            return i;
        }
    }
}

// cadastrarAnimal('Toto', 'gato', ['tontura', 'vômito', 'febre'])
// cadastrarAnimal('Belinha', 'cachorro', ['tontura', 'vômito', 'febre'])
// cadastrarAnimal('Loro', 'papagaio', ['febre'])
// adicionarValorDoTratamento('Belinha', 299)
// adicionarValorDoTratamento('Belinha', 100)
// informarQueAnimalFoiTratado('Belinha')
// informarQueOTratamentoFoiPago('cachorro')
// adicionarRemediosNoTratamento('Belinha', ['Dorflex', 'Água purificada'])
// adicionarRemediosNoTratamento('Belinha', ['Vermifugo'])

cadastraAnimalParaAdocaoMacho('Jack', 'cachorro', true)
cadastraAnimalParaAdocaoMacho('Bolinha', 'gato', false)
cadastraAnimalParaAdocaoFemea('Belinha', 'cachorro', false)
cadastraAnimalParaAdocaoFemea('Pipoca', 'cachorro', true)

listarAnimaisDisponiveisParaAdocao()
adotarAnimal('Jack')
console.log('------------------------')
listarAnimaisDisponiveisParaAdocao()
