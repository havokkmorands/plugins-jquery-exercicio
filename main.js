$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#input-tarefa').val();
        const novoItem = $('<li></li>');
        novoItem.text(tarefa);
        $(novoItem).appendTo('ul');
        console.log(novoItem);
        $('#input-tarefa').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('checked');
    })
})