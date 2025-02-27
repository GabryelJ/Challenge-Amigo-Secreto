let nomesParaSorteio = [];

function adicionarAmigo(){
    let entradaNome = document.getElementById("amigo");
    let nome = entradaNome.value;
    function semRepeticao(nome){
        if (!nomesParaSorteio.includes(nome)){
            nomesParaSorteio.push(nome);
        }else{
            alert(`${nome} já está contido na lista.`)
        }
    }

    !nome ? alert("Por favor, insira um nome.") : semRepeticao( nome );

    entradaNome.value = "";
    atualizarExibicaoDosAmigosNaLista();
    entradaNome.focus();
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
        resultado.innerHTML = `O amigo sorteado foi : ${nomeSorteado}`;

        nomesParaSorteio = [];
        document.getElementById("listaAmigos").innerHTML = "";
    }
}