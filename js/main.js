$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

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
            },
        },
        messages: {
            nome: 'Por favor, preencha o campo nome',
            email: 'Por favor, preencha o campo e-mail',
            telefone: 'Por favor, preencha o campo telefone',
            endereco: 'Por favor, preencha o campo endereço',
            cep: 'Por favor, preencha o campo CEP',
            cpf: 'Por favor, preencha o campo CPF',
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
});