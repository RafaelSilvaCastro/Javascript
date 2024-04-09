
        function testes(){
            //executado quando chamar a função
            console.log('chamando a funcao teste');
        }
        testes();

        //-----------------

        function testes2(nome,idade){
            console.log(`O nome passado e: ${nome}`)
            console.log(`A idade e: ${idade}`)
        }

        testes2('Guilherme',27)
        testes2('Joao',30)

        //-----------------------

        function pegarNome(parametro){
            if(parametro == 1){
                return 'Guilherme';
            }else{
                return 'Outro nome';
            }
        }

        var nome = pegarNome(1);
        console.log(nome);

        //-----------------
