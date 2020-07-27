
let geral=[]
function cadastrarNomes(nome,sintomas,dias,remedios){
    let total={
        name: nome,
        fell: sintomas,
        time: dias,
        medicine: remedios,
    }
    geral.push(total)
}
cadastrarNomes("Rony",["Dor de cabeça","Febre"],2,["Hidro","Azi"])
console.log(geral)
