var agora = new Date()
var bom = agora.getHours() + agora.getMinutes()

if (bom < 12) {
    console.log('Bom dia')
}

else if (bom < 18) {

    console.log('Boa tarde')
}else {

    console.log('Boa noite')
}



if (bom == 1){  
    console.log(`É ${bom} hora `)
}else{
    console.log(`São ${bom} horas  `)
}