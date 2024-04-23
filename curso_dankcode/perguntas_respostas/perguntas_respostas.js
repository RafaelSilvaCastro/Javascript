var elementos = document.querySelector('[type=radio');

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('change',function(e){
        let marcado = e.target.value;
        if(marcado == "correta"){
            alert('Voce acertou a pergunta!');
        }else if(marcado == "incorret"){
            alert('Voce errou a pergunta!');
        }
    })
}