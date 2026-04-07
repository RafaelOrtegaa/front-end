function pagina() {
    
    // Cria o título (<h2>)
    const titulo = document.createElement("h2");
    titulo.textContent = "Lista de Tarefas";

    // Cria o campo de texto (<input>)
    const input = document.createElement("input");
    input.type = "text";
    input.id = "tarefaInput";
    input.placeholder = "Digite uma tarefa";

    // Cria o botão (<button>)
    const botao = document.createElement("button");
    botao.id = "btnAdicionar";
    botao.textContent = "Adicionar";

    // Cria a lista (<ul>)
    const lista = document.createElement("ul");
    lista.id = "listaTarefa";

    // Adiciona todos os elementos criados dentro da tag <body> da página
    document.body.appendChild(titulo);
    document.body.appendChild(input);
    document.body.appendChild(botao);
    document.body.appendChild(lista);

    

    botao.addEventListener("click", () => {
        // Criar novo elemento da lista
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim();

        if (texto === "") {
            alert("Digite alguma tarefa!");
            return;
        }

        novaTarefa.textContent = texto; // adiciona texto ao elemento da lista
        novaTarefa.classList.add('destaque'); // adiciona a classe "destaque" ao li
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase()); // adiciona atributo personalizado
        novaTarefa.style.color = "#333"; // muda a cor do texto

        lista.appendChild(novaTarefa); // adiciona elemento na tela

        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo:", tarefa);
            novaTarefa.classList.remove("destaque"); // remove a classe html destaque
            novaTarefa.classList.add("removido"); // acrescentar a classe html removido
            novaTarefa.innerHTML += " (removida)"; // acrescenta o texto
            
            // Remove a tarefa depois de 1 segundo
            setTimeout(() => { lista.removeChild(novaTarefa); }, 1000); 
        });

        // Limpa a caixa de texto depois de adicionar
        input.value = "";
    });
}

// Executa a função assim que o script for carregado
pagina();