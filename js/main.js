$(document).ready(function () {
   $("#carousel-imagens").slick({
      autoplay: true,
      arrows: false,
   });
   $("#telefone").mask("(00) 00000-0000", {
      placeholder: "(DDD) 12345-6789",
   });

   $("#cpf").mask("000.000.000-00", {
      placeholder: "123.456.789-00",
   });

   $("#cep").mask("00000-000", {
      placeholder: "01234-567",
   });

   $("form").validate({
      rules: {
         nome: {
            required: true,
         },
         email: {
            required: true,
            email: true,
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
         nome: "Digite seu nome completo",
         email: "Digite seu e-mail",
         telefone: "Digite seu telefone",
         cpf: "Digite seu CPF",
         endereco: "Digite seu endereço completo",
         cep: "Digite seu CEP",
      },
      submitHandler: function (form) {
         const inputNameValue = $("#nome").val();

         alert(
            `Olá ${inputNameValue}, sua requisição foi enviada para análise, parabéns pela aquisição!`
         );
         form.reset();
      },
      invalidHandler: function (form, validator) {
         const inputNameValue = $("#nome").val();
         const numberOfFild = validator.numberOfInvalids();

         if (numberOfFild == 1) {
            alert(
               `Por favor ${inputNameValue}, preencha o campo para prosseguir com a compra!`
            );
         } else {
            alert(
               `Por favor ${inputNameValue}, preencha os ${numberOfFild} campos para prosseguir com a compra!`
            );
         }
      },
   });

   $("header").click(function () {
      const destino = $("#container");

      $("html").animate(
         {
            scrollTop: destino.offset().top,
         },
         1000
      );
   });
});
