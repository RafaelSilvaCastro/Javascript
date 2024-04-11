/*
const testes = (par)=>{
    console.log(par);
}
testes('EU AMO MINHA NAMORADA S2');
*/

const testes = (texto,par)=>{
    par(texto);
}

testes('EU AMO MINHA NAMORADA S2',(texto)=>{
    console.log(texto)
});