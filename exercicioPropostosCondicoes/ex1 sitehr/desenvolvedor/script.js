function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg1 = window.document.getElementById('msg1')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //bom dia
        msg1.innerHTML = `Bom dia!`
        img.src = '/imagens/manha-250.png'
        document.body.style.background = '#a1d7fb'
    } else if ( hora >= 12 && hora <= 18){
        //boa tarde
        img.src = '/imagens/tarde-250.png'
        document.body.style.background = '#e69844'
        msg1.innerHTML = `Boa tarde!`
    } else {
        //boa noite
        img.src = '/imagens/noite-250.png'
        document.body.style.background = '#49506d'
        msg1.innerHTML = `Boa noite!`
    }
}
