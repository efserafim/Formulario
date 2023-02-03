function gerarPDF() {
    if (!validaCPF(cpf.value)) {
        alert("CPF inválido");
        return;
    }

    let PDF = new jsPDF ()
    PDF.text("Nome:" + nome.value,10,10)
    PDF.text("Cpf:" + cpf.value,10,20)
    PDF.text("Email:" + email.value,10,30)
    PDF.text("Telefone:" + telefone.value,10,40)
    PDF.text("Cidade:" + cidade.value,10,50)
    PDF.text("UF:" + estado.value,10,60)
    PDF.text("Endereço:" + endereco.value,10,70)
    
    PDF.save("Cadastro")
}


function validaCPF(cpf) {
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;

    let soma = 0;
    let resto;

    for (i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;

    return true;
}
