function press () {
    num = document.getElementById('tab')
    type = document.getElementById('sel')
    type.innerHTML = ''
    if (num.value.length == 0){
        window.alert('[BEEMMM!!!] ERROR poha')
        
    }else{ 
    
        for ( c = 1 ; c <= 10 ; c++){
            item = document.createElement('option')
            item.text = `${num.value} x ${c} = ${num.value * c}`
            type.appendChild(item)

        }
    }


}