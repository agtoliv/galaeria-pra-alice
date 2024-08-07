$(document).ready(function(){
    /*document.querySelector('header button').addEventListener('click', function (e){

    });*/

    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    

    $('form').on('submit', function(e){ 
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoNovaImagem}" alt="Imagem da Galeria"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                    Ver imagem em tamanho real 
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    });
});