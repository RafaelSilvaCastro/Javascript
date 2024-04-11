let p = document.getElementsByTagName('p');

p[0].innerHTML = 'Manipulado via JS!';

for(var i = 0; i < p.length; i++){
    p[i].innerHTML = `Manipulando via JS - ${i}`;
}