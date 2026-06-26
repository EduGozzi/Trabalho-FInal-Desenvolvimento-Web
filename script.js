const btnMostrar = document.getElementById("btnMostrar");
const textoCuriosidade = document.getElementById("textoCuriosidade");
if (btnMostrar && textoCuriosidade) {
    btnMostrar.addEventListener("click", function () {
        if (textoCuriosidade.style.display === "block") {
            textoCuriosidade.style.display = "none";
            btnMostrar.textContent = "Mostrar curiosidade";
        } else {
            textoCuriosidade.style.display = "block";
            btnMostrar.textContent = "Esconder curiosidade";
        }
    });
}
const formContato = document.getElementById("formContato");
if (formContato) {
    formContato.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const mensagemErro = document.getElementById("mensagemErro");
        const mensagemSucesso = document.getElementById("mensagemSucesso");

        if (nome === "" || mensagem === "") {
            mensagemErro.style.display = "block";
            mensagemSucesso.style.display = "none";
        } else {
            mensagemErro.style.display = "none";
            mensagemSucesso.style.display = "block";
            formContato.reset();
        }
    });
}