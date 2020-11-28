var agora = new Date
var hora = agora.getHours()
console.log (`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom Dia!`)
} else if (hora <= 18) {
    console.log(`Boa Tarde!`)
} else {
    console.log(`Boa Noite!!`)
}
//break é obrigatório, assim nao tera problemas com a continuidade de codigos