var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
        alert(playerOpt);
    })
}