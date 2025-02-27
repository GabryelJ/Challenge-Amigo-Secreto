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

function sortearAmigo(){
    let numeroDeParticipantes = nomesParaSorteio.length;
    if(numeroDeParticipantes > 0){
        const resultado = document.getElementById("resultado");
        let numeroSorteado = parseInt(Math.random() * numeroDeParticipantes);
        let nomeSorteado = nomesParaSorteio[numeroSorteado];

        resultado.innerHTML = "";
        let elementoNomeSorteado = document.createElement("li");
        elementoNomeSorteado.textContent = nomeSorteado;
        resultado.appendChild(elementoNomeSorteado);
    }
}