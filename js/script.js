(function($) {

    gerar = function() {
        var linha = parseInt($('#linha').val());
        var coluna = parseInt($('#coluna').val());

        var contador = 0;

        var randomico = Math.floor(Math.random() * ((linha * coluna) - 0)) + 0;

        // gerando tabela
        for (var i = 0; i < linha; i++) {
            var tr = '<tr>';
            var td = "";

            for (var j = 0; j < coluna; j++) {
                td += '<td>' + '0' + '</td>';
            }

            tr += td;
            tr += '</tr>';
            $('#tabela-cabeca tbody').append(tr);
        }

        // gerando tabela dinamica
        for (var i = 0; i < linha; i++) {
            for (var j = 0; j < coluna; j++) {
                $('#tabela-cabeca tbody tr').eq(i).find('td').eq(j).text(String(randomicoUni(linha, coluna)));
            }
        }

    }


    function randomicoUni(linha, coluna) {
        var randomico = parseInt(Math.floor(Math.random() * ((linha * coluna) - 0)) + 0);

        for (var i = 0; i < linha; i++) {
            for (j = 0; j < coluna; j++) {
                if (randomico == parseInt($('#tabela-cabeca tbody tr').eq(i).find('td').eq(j).text())) {
                    randomico = parseInt(Math.floor(Math.random() * ((linha * coluna) - 0)) + 0);
                    i = -1;
                    j = -1;
                    break;
                }
            }
        }
        console.log(randomico);
        return randomico;
    }


})(jQuery);