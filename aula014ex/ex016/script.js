function press ( ) {
    var in1 = document.querySelector('input#ini')
    var fi = document.querySelector('input#fim')
    var pa = document.querySelector('input#pas')
    var info = document.querySelector('div#info')
    var registro = document.getElementById('registro')


    if (in1.value.length == 0 || fi.value.length == 0 || pa.value.length == 0){  
        window.alert('[ERRO] faltam dados')
        info.innerHTML = 'Impossível contar'   
    } else{  
        info.innerHTML = 'contando: '
        let i = Number(in1.value)
        let f = Number(fi.value)
        let p = Number(pa.value)        
        if (p == 0){
            window.alert('IMPOSSÍVEL considerar o PASSO 0. Sendo assim foi adotado o valor 1 para o PASSO')
            p = 1
        }
        if (i > f){ 
            for (i; i >= f; i -= p)
            info.innerHTML += `${i} \u{2699} `
            
        }else {
            for (i; i <= f; i += p)
            info.innerHTML += `${i} \u{2699} `
        }
        }
        
    
    
    
    
    }
    
    
   









