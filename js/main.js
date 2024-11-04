$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    });
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome completo',
            email: 'Por favor, insira um e-mail valido',
            telefone: 'Por favor, insira um número valido',
            cpf: 'Por favor, insira um CPF valido',
            endereco: 'Por favor, insira um endereço',
            cep: 'Por favor, insira um CEP valido',
        },

        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function(form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    });
})


