const formulario = document.getElementById("form-contato");

function mostrarErro(campo, mensagem) {
    document.getElementById(`erro-${campo}`).textContent = mensagem;
}

function limparErros() {
    mostrarErro("nome", "");
    mostrarErro("email", "");
    mostrarErro("mensagem", "");
    document.getElementById("mensagem-sucesso").textContent = "";
}

function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    limparErros();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    let valido = true;

    if (nome.length < 3) {
        mostrarErro("nome", "Digite um nome com pelo menos 3 caracteres.");
        valido = false;
    }

    if (!emailValido(email)) {
        mostrarErro("email", "Digite um e-mail válido.");
        valido = false;
    }

    if (mensagem.length < 10) {
        mostrarErro("mensagem", "Digite uma mensagem com pelo menos 10 caracteres.");
        valido = false;
    }

    if (valido) {
        document.getElementById("mensagem-sucesso").textContent = "Mensagem enviada com sucesso!";
        formulario.reset();
    }
});
