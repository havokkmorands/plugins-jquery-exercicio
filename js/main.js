$(document).ready(() => {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true,
                minlength: 15
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            nome: "Por favor, insira o seu nome",
            email: "Por favor, insira o seu e-mail",
            telefone: "Por favor, insira o seu telefone",
            cpf: "Por favor, insira o seu CPF",
            endereco: "Por favor, insira o seu endereço",
            cep: "Por favor, insira o seu CEP"
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})
