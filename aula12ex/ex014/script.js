function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 22) {
        //BOM DIA!
        img.src = '.jpg'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = '.jpg'
    } else {
        //BOA NOITE!
        img.src = '.jpg'
    }
}
//fotos com erro, sem edição