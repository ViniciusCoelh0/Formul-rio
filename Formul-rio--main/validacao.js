function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const emailConfirma = document.getElementById('emailConfirma').value;
    const senha = document.getElementById('senha').value;
    const senhaConfirma = document.getElementById('senhaConfirma').value;

    if (nome === '' || email === '' || emailConfirma === '' || senha === '' || senhaConfirma === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false; // Impede o envio do formulário se algum campo estiver vazio
    }

    if (email !== emailConfirma) {
        alert('Os campos de e-mail não coincidem.');
        return false; // Impede o envio do formulário se os e-mails não coincidirem
    }

    if (senha !== senhaConfirma) {
        alert('Os campos de senha não coincidem.');
        return false; // Impede o envio do formulário se as senhas não coincidirem
    }

    return true; // Permite o envio do formulário se todas as validações passarem
}