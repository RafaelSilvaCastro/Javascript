function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido!')
        }
        if(i < f){
            //contagem crescente
            for(var c = i; c <= f; c +=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            //contagem regressiva
            for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
