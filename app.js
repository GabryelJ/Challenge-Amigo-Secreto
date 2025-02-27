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
    atualizarExibicaoDosAmigosNaLista();
}

function atualizarExibicaoDosAmigosNaLista(){
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < nomesParaSorteio.length; i++) {
        let novoLi = document.createElement('li');
        novoLi.textContent = nomesParaSorteio[i];

        listaAmigos.appendChild(novoLi);
    }
}