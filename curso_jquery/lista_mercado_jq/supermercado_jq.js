//usando jQuery

$(document).ready(()=>{
    var items = [];

    $('input[type=submit]').click(()=>{
        var nomeProduto = $('input[name=nome_produto]').val();
        var precoProduto = $('input[name=price]').val();

        items.push({
            nome: nomeProduto,
            valor: precoProduto
        });

        var listaProdutos = $('.lista-produtos');
        var soma = 0;
        listaProdutos.empty();
        $.each(items, (index, val)=>{
            soma += parseFloat(val.valor);
            listaProdutos.append(`
                <div class="lista-produtos-single">
                    <h3>${val.nome}</h3>
                    <h3 class="price-produto"><span>R$${val.valor}</span></h3>
                </div>
            `);
        });
        
        soma = soma.toFixed(2);
        $('input[name=nome_produto]').val("");
        $('input[name=price]').val("");
        
        var elementoSoma = $('.soma-produtos h1');
        elementoSoma.text('R$' + soma);
    });

    // Zerar o array
    $('button[name=limpar]').click(()=>{
        items = [];
        $('.lista-produtos').empty();
        $('.soma-produtos h1').text("R$0");
    });
});