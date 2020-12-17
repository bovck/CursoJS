function carregar(){
    
    var imagem = document.querySelector('img#imagem')
    var msg = document.querySelector('div#msg')
    var data = new Date()
    var hora = data.getHours()
    var corpo = document.querySelector('body#corpo')
    if (hora == 1) {
        
        msg.innerHTML = `Agora são ${hora} hora.`

    }else{
        msg.innerHTML = `Agora são ${hora} horas.`
    }
    
    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagem_manha_redonda.jpg'
        corpo.style.background = '#ffe854'

    }else if (hora >= 12 && hora < 19){
        imagem.src = 'tarde.png'
        corpo.style.background = '#ffa62d'
    
    }else {
        imagem.src = 'noite.jpg'
        corpo.style.background = '#16213f'
    }
}


