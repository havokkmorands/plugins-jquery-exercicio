$(document).ready(function () {
            $('#carousel-imagens').slick({ //erro de sintaxe ao chamar o id para o fncionamento do carousel
                autoplay: true,
                arrows: false
            })
        });
$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    }),
    
    $('form').validate({
        rules: {
            nome: {
                requered: true
            },
            email: {
                requered: true,
                email: true
            },
            telefone: {
                requered: true
            },
            endereco: {
                requered: true
            },
            cep: {
                requered: true
            },
            cpf: {
                requered: true
            },
           
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