$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });

$('#nome').mask('xxxxx xxxxx', {
    placeholder: 'Seu nome'
})

$('#email').mask('email@email', {
    placeholder: 'email@email.com'
})

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '12345-678'
})

$('form').validate({
    rules: {
        nome: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
        },
        endereco: {
            required: true,
        },
        cep: {
            required: true,
        },
        cpf: {
            required: true,
        },
    },

        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})