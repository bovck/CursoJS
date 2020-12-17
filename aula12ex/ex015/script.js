function verificar() {
    var tempo = new Date()
    var ano = tempo.getFullYear()
    var nasc = window.document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert('[ERRor] matriz bugou')
    }else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            
            genero = 'Homem'
            if (idade >= 0 &&  idade < 10 ) {
                // Criança
                img.setAttribute('src','criança_menino.png')
            
            } else if (idade <= 25) {
                // jovem
                img.setAttribute('src','menino.png')
            
            } else if (idade <= 40) {
                // adulto
                img.setAttribute('src','homem.png')        
            } else{
                // idoso
                img.setAttribute('src','senhor.png')
            }            
        } else if(sex[1].checked){
            
            genero = 'Mulher'
            if (idade >= 0 &&  idade < 10 ) {
                // Criança
                img.setAttribute('src','criança_menina.png')
            } else if (idade <= 25) {
                // jovem
                img.setAttribute('src','menina.png')
            } else if (idade <= 40) {
                // adulto
                img.setAttribute('src','mulher.png')   
            } else{
                // idoso
                img.setAttribute('src','senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos`
        res.appendChild(img)
            
        
    

    }
}
