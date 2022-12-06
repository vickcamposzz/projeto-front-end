function validar() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let celular = document.getElementById("celular");
    let idade = document.getElementById("idade");
    let sexo = document.getElementById("sexo")
    let estadoselect = document.getElementById("estadoselect");
    let cidadeselect = document.getElementById("cidadeselect");
    let motivo = document.getElementById("motivo");
    let message = document.getElementById("mensagem");

    if (nome.value == "") {
        nome.focus();
    }

    const regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/
    
    if(!regexEmail.test(email.value)){
       email.focus();
       alert("bote o .com")
    }

    if(idade.value == "") {
        idade.focus();
    }

    if(sexo.value == "") {
        sexo.focus();
    }

    if(estadoselect.value == "") {
        estadoselect.focus();
    }

    if(cidadeselect.value == "") {
        cidadeselect.focus();
        return
    }

    if(motivo.value == "") {
        motivo.focus();
    }

    if(mensagem.value == "") {
        mensagem.focus();
    }
}