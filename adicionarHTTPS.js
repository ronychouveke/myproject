/**
 * A primeira função deverá se chamar adicionarHttp , a mesma, receberá por
 * parâmetro uma URL que será concatenada com a String
 * "http://" no começo da URL e em seguida retornará esse valor.
 * A segunda função se chamará processar  e receberá uma
 * lista de sites web e uma função. A função processar  retornará
 * um array contendo todos os resultados aplicando a função que foi passada.
 **/
function adicionarHttp(url) {
    url = 'http://' + url

    return url
}

function processar(listaDeSites, callback) {
    return listaDeSites.map(function(item) {
        if(item != 'www.google.com.br') {
            return callback(item)
        }
    }).filter((item) => item != null)
}
const sites = [
    'www.google.com.br',
    'www.uol.com.br',
    'www.gmail.com.br',
]
const sitesProcessados = processar(sites, adicionarHttp)
processar(sites, (item) => {
    console.log(item)
})
console.log(sitesProcessados)