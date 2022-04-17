function contar() {
    var tx1 = document.querySelector('input#valor1')
    var tx2 = document.querySelector('input#valor2')
    var tx3 = document.querySelector('input#valor3')
    var res = document.querySelector('div#res')
    res.innerHTML = `Preparando contagem:`
    if (tx1.value.length == 0 || tx2.value.length == 0 ){
        res.innerHTML = `Impossível contar!!`
    } else if (tx3.value.length == 0 ){
        window.alert('[ERRO] O passo deve ser informado!')
    }else if(Number(tx1.value) > Number(tx2.value)){
        res.innerHTML = `Contando:`
        var num1 = Number(tx1.value)
        var num2 = Number(tx2.value)
        var num3 = Number(tx3.value)
        for(var i = num1;i >= num2; i-= num3){
            res.innerHTML += ` ${i}\u{2714},`
        }
    } else if (Number(tx3.value) < 1 ){
        window.alert('Passo inválido! Considerando passo 1.')
        res.innerHTML = `Contando:`
        var num1 = Number(tx1.value)
        var num2 = Number(tx2.value)
        for(var i = num1; i <= num2; i++){
            res.innerHTML += ` ${i}\u{2714},`
        }
    } else if (Number(tx3.value) >= 1){
        var num1 = Number(tx1.value)
        var num2 = Number(tx2.value)
        var num3 = Number(tx3.value)
        res.innerHTML = `Contando:`
        for(var i = num1; i <= num2; i+=num3){
            res.innerHTML += ` ${i}\u{2714},`
            
        }
         
    } 
}