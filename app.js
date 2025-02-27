let nomesParaSorteio = [];

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value;

    function semRepeticao(nome){
        if (!nomesParaSorteio.includes(nome)){
            nomesParaSorteio.push(nome);
        }
    }

    !nome ? alert("Por favor, insira um nome.") : semRepeticao( nome );

    document.getElementById("amigo").value = "";
}

